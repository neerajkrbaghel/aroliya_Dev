// app/api/client/profile/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export async function PUT(request) {
  try {
    const formData = await request.formData();
    const userId = formData.get("userId");
    const name = formData.get("name");
    const businessName = formData.get("businessName");
    const avatarFile = formData.get("avatar");

    console.log("📝 Profile update request:", {
      userId,
      name,
      businessName,
      hasAvatar: !!avatarFile,
    });

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID required" },
        { status: 400 }
      );
    }

    let avatarUrl = null;

    // Handle avatar upload
    if (avatarFile && avatarFile.size > 0) {
      try {
        const bytes = await avatarFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const timestamp = Date.now();
        const fileExtension = avatarFile.name.split(".").pop();
        const filename = `avatar_${userId}_${timestamp}.${fileExtension}`;
        const publicDir = path.join(process.cwd(), "public", "avatars");

        const fs = await import("fs");
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }

        const filepath = path.join(publicDir, filename);
        await writeFile(filepath, buffer);

        avatarUrl = `/avatars/${filename}`;
        console.log("✅ Avatar uploaded:", avatarUrl);
      } catch (uploadError) {
        console.error("❌ Avatar upload failed:", uploadError);
      }
    }

    // Update user basic info
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: {
        name: name?.trim(),
        avatar: avatarUrl || undefined,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        role: true,
        createdAt: true,
      },
    });

    // Update or create userProfile for businessName
    const updatedProfile = await prisma.userProfile.upsert({
      where: { userId: parseInt(userId) },
      update: { businessName: businessName?.trim() || null },
      create: {
        userId: parseInt(userId),
        businessName: businessName?.trim() || null,
        title: "Client",
        available: true,
      },
    });

    console.log("✅ User profile updated successfully:", {
      ...updatedUser,
      businessName: updatedProfile.businessName,
    });

    return NextResponse.json({
      success: true,
      user: { ...updatedUser, businessName: updatedProfile.businessName },
    });
  } catch (error) {
    console.error("❌ Profile update error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update profile. Please try again.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// GET method to fetch user profile
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId: parseInt(userId) },
      select: { businessName: true },
    });

    return NextResponse.json({
      success: true,
      user: { ...user, businessName: profile?.businessName || null },
    });
  } catch (error) {
    console.error("❌ Profile fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch profile",
      },
      { status: 500 }
    );
  }
}
