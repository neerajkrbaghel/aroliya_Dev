// app/api/freelancer/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "all";
    const skills = searchParams.get("skills") || "";
    const minRate = searchParams.get("minRate");
    const maxRate = searchParams.get("maxRate");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12;

    const skip = (page - 1) * limit;

    console.log("🔍 Fetching freelancers from database...");

    // Build where clause - get users who have userprofiles
    const where = {
      userprofile: {
        isNot: null,
      },
    };

    // Search filter
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        {
          userprofile: {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { bio: { contains: search, mode: "insensitive" } },
              { skills: { contains: search, mode: "insensitive" } },
            ],
          },
        },
      ];
    }

    // Skills filter
    if (skills) {
      where.userprofile.skills = { contains: skills, mode: "insensitive" };
    }

    // Hourly rate filter
    if (minRate || maxRate) {
      where.userprofile.hourlyRate = {};
      if (minRate) where.userprofile.hourlyRate.gte = parseFloat(minRate);
      if (maxRate) where.userprofile.hourlyRate.lte = parseFloat(maxRate);
    }

    // Category filter
    if (category !== "all") {
      where.userprofile.skills = {
        contains: category,
        mode: "insensitive",
      };
    }

    // Fetch freelancers from database
    const [freelancers, totalCount] = await Promise.all([
      prisma.user.findMany({
        where,
        include: {
          userprofile: true,
          reviewsReceived: true,
          freelancerProjects: {
            where: {
              status: "completed",
            },
          },
          _count: {
            select: {
              freelancerProjects: {
                where: {
                  status: "completed",
                },
              },
              reviewsReceived: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),
      prisma.user.count({ where }),
    ]);

    console.log(`✅ Found ${freelancers.length} freelancers`);

    // Process freelancer data
    const processedFreelancers = freelancers.map((freelancer) => {
      // Calculate average rating
      const totalRating = freelancer.reviewsReceived.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const avgRating =
        freelancer.reviewsReceived.length > 0
          ? (totalRating / freelancer.reviewsReceived.length).toFixed(1)
          : "0.0";

      // Process skills
      const skillsArray = freelancer.userprofile?.skills
        ? freelancer.userprofile.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill.length > 0)
        : [];

      // FIXED: Properly handle userprofile image
      // Check multiple possible image sources in order of priority
      let userprofileImage = null;

      // 1. First check user's main avatar
      if (freelancer.avatar) {
        userprofileImage = freelancer.avatar;
      }
      // 2. Then check userprofile avatar
      else if (freelancer.userprofile?.avatar) {
        userprofileImage = freelancer.userprofile.avatar;
      }
      // 3. Check if there's a userprofileImage field (if you add it to schema)
      else if (freelancer.userprofileImage) {
        userprofileImage = freelancer.userprofileImage;
      }

      console.log(`👤 Freelancer ${freelancer.name} image:`, {
        userAvatar: freelancer.avatar,
        userprofileAvatar: freelancer.userprofile?.avatar,
        finalImage: userprofileImage,
      });

      return {
        id: freelancer.id,
        name: freelancer.name,
        email: freelancer.email,
        // FIXED: Use consistent field name
        avatar: userprofileImage,
        userprofileImage: userprofileImage, // Add this for compatibility
        userprofile: {
          ...freelancer.userprofile,
          // Ensure userprofile also has the image
          avatar: userprofileImage,
        },
        avgRating,
        skills: skillsArray,
        reviewCount: freelancer.reviewsReceived.length,
        completedProjects: freelancer._count.freelancerProjects,
        isAvailable: freelancer.userprofile?.available ?? true,
      };
    });

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      freelancers: processedFreelancers,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error("❌ Error fetching freelancers:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
