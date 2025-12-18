import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, jobId, experience, resume, coverLetter } = body;

    // Validation
    if (!name || !email || !phone || !jobId || !experience || !resume) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if application already exists for this email and job
    // Use findFirst with the composite unique constraint
    const existingApplication = await prisma.jobApplication.findFirst({
      where: {
        AND: [{ email: email }, { jobId: jobId }],
      },
    });

    if (existingApplication) {
      return NextResponse.json(
        { error: "You have already applied for this job" },
        { status: 400 }
      );
    }

    // Get job title from job list (you might want to fetch from a jobs table)
    const jobs = [
      { id: "1", title: "Senior Frontend Developer (React/Next.js)" },
      { id: "2", title: "AI/ML Engineer – Data & Predictive Analytics" },
      { id: "3", title: "Senior Travel Consultant – Global Bookings" },
      { id: "4", title: "Virtual Executive Assistant" },
      { id: "5", title: "Data Analyst – Business Intelligence" },
      { id: "6", title: "UX/UI Designer – Digital Solutions" },
      { id: "7", title: "Travel Itinerary Specialist" },
      { id: "8", title: "Virtual Customer Support Agent" },
      { id: "9", title: "Backend Developer – Node.js & Express" },
      { id: "10", title: "Virtual Marketing Assistant" },
      { id: "11", title: "Travel Booking Coordinator" },
      { id: "12", title: "Full Stack Developer – React & Node" },
    ];

    const job = jobs.find((j) => j.id === jobId);
    const jobTitle = job ? job.title : "Unknown Job";

    // Create job application
    const jobApplication = await prisma.jobApplication.create({
      data: {
        name,
        email,
        phone,
        jobTitle,
        jobId,
        experience: parseInt(experience),
        resumeUrl: resume,
        coverLetter: coverLetter || "",
        status: "pending",
      },
    });

    // Send email notification (optional)
    // await sendApplicationEmail(email, name, jobTitle);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      data: jobApplication,
    });
  } catch (error) {
    console.error("Error creating job application:", error);

    // Handle Prisma unique constraint violation error
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "You have already applied for this job" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const email = searchParams.get("email");

    let whereClause = {};

    if (status) {
      whereClause.status = status;
    }

    if (email) {
      whereClause.email = email;
    }

    const applications = await prisma.jobApplication.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    console.error("Error fetching job applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
