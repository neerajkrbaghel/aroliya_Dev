import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Middleware for admin authentication (optional)
const isAdmin = (request) => {
  // Implement your admin authentication logic here
  // Check for admin token, session, etc.
  return true; // For now, return true. Implement proper auth.
};

export async function GET(request) {
  try {
    // Check if user is admin
    if (!isAdmin(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 20;
    const status = searchParams.get("status");
    const jobId = searchParams.get("jobId");
    const search = searchParams.get("search");

    const skip = (page - 1) * limit;

    let whereClause = {};

    if (status) {
      whereClause.status = status;
    }

    if (jobId) {
      whereClause.jobId = jobId;
    }

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { jobTitle: { contains: search, mode: "insensitive" } },
      ];
    }

    const [applications, total] = await Promise.all([
<<<<<<< HEAD
      prisma.job.findMany({
=======
      prisma.jobApplication.findMany({
>>>>>>> 744bd99 (Update code from new location)
        where: whereClause,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),
<<<<<<< HEAD
      prisma.job.count({ where: whereClause }),
=======
      prisma.jobApplication.count({ where: whereClause }),
>>>>>>> 744bd99 (Update code from new location)
    ]);

    return NextResponse.json({
      success: true,
      data: applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    // Check if user is admin
    if (!isAdmin(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, status, notes } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: "Application ID and status are required" },
        { status: 400 }
      );
    }

    const validStatuses = ["pending", "reviewed", "accepted", "rejected"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

<<<<<<< HEAD
    const updatedApplication = await prisma.job.update({
=======
    const updatedApplication = await prisma.jobApplication.update({
>>>>>>> 744bd99 (Update code from new location)
      where: { id },
      data: {
        status,
        ...(notes && { notes }), // Add notes if provided
      },
    });

    // Send email notification about status change (optional)
    // await sendStatusEmail(updatedApplication.email, updatedApplication.name, status);

    return NextResponse.json({
      success: true,
      message: "Application updated successfully",
      data: updatedApplication,
    });
  } catch (error) {
    console.error("Error updating application:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update application" },
      { status: 500 }
    );
  }
}
