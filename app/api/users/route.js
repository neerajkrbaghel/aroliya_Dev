export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

/* =========================
   GET USERS
========================= */
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: { userprofile: true },
      orderBy: { createdAt: "desc" },
    });

    return Response.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("GET users error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/* =========================
   CREATE USER
========================= */
export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json();

    if (!name || !email || !password) {
      return Response.json(
        { success: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        { success: false, error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "user",
        registrationMethod: "email",
      },
    });

    await prisma.userProfile.create({
      data: {
        userId: newUser.id,
        title:
          role === "freelancer"
            ? "Freelancer"
            : role === "client"
            ? "Client"
            : "User",
        bio: "New user",
        available: role === "freelancer",
      },
    });

    return Response.json(
      {
        success: true,
        user: {
          id: newUser.id,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST user error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
