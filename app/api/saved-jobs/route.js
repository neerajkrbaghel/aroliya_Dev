import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET - Fetch saved jobs for a user
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
<<<<<<< HEAD
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const savedJobs = await prisma.savedJob.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        job: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
            _count: {
              select: {
                proposals: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
=======
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const savedJobs = await prisma.savedJob.findMany({
      where: { userId: parseInt(userId) },
      include: {
        JobPost: {   // Correct relation name in model
          include: {
            user: { include: { profile: true } },
            _count: { select: { proposals: true } },
          },
        },
      },
      orderBy: { createdAt: "desc" },
>>>>>>> 744bd99 (Update code from new location)
    });

    return NextResponse.json({ savedJobs });
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
<<<<<<< HEAD
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
=======
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
>>>>>>> 744bd99 (Update code from new location)
  }
}

// POST - Save a job
export async function POST(request) {
  try {
    const { userId, jobId } = await request.json();

    if (!userId || !jobId) {
<<<<<<< HEAD
      return NextResponse.json(
        { error: "User ID and Job ID are required" },
        { status: 400 }
      );
    }

    // Check if job is already saved
    const existingSavedJob = await prisma.savedJob.findUnique({
      where: {
        userId_jobId: {
          userId: parseInt(userId),
          jobId: parseInt(jobId),
        },
      },
=======
      return NextResponse.json({ error: "User ID and Job ID are required" }, { status: 400 });
    }

    const existingSavedJob = await prisma.savedJob.findUnique({
      where: { userId_jobId: { userId: parseInt(userId), jobId: parseInt(jobId) } },
>>>>>>> 744bd99 (Update code from new location)
    });

    if (existingSavedJob) {
      return NextResponse.json({ error: "Job already saved" }, { status: 400 });
    }

    const savedJob = await prisma.savedJob.create({
<<<<<<< HEAD
      data: {
        userId: parseInt(userId),
        jobId: parseInt(jobId),
      },
      include: {
        job: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
            _count: {
              select: {
                proposals: true,
              },
            },
=======
      data: { userId: parseInt(userId), jobId: parseInt(jobId) },
      include: {
        JobPost: {
          include: {
            user: { include: { profile: true } },
            _count: { select: { proposals: true } },
>>>>>>> 744bd99 (Update code from new location)
          },
        },
      },
    });

    return NextResponse.json({ savedJob });
  } catch (error) {
    console.error("Error saving job:", error);
<<<<<<< HEAD
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
=======
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
>>>>>>> 744bd99 (Update code from new location)
  }
}
