import { NextResponse } from "next/server";
<<<<<<< HEAD
// import { prisma } from "@/lib/prisma";
import { prisma } from "../../../lib/prisma";


// ================== GET ==================
=======
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests for contact requests
>>>>>>> 744bd99 (Update code from new location)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
<<<<<<< HEAD
    const type = searchParams.get("type"); // sent | received | website
=======
    const type = searchParams.get("type"); // 'sent', 'received', or 'website'

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 }
      );
    }
>>>>>>> 744bd99 (Update code from new location)

    let contactRequests = [];

    if (type === "sent") {
<<<<<<< HEAD
      if (!userId) {
        return NextResponse.json(
          { success: false, error: "User ID required" },
          { status: 400 }
        );
      }

      contactRequests = await prisma.contactRequest.findMany({
        where: { clientId: Number(userId) },
        include: {
          freelancer: {
            select: { id: true, name: true, email: true },
=======
      // Get contact requests sent by this user (as client)
      contactRequests = await prisma.contactRequest.findMany({
        where: {
          clientId: parseInt(userId),
        },
        include: {
          freelancer: {
            select: {
              id: true,
              name: true,
              email: true,
              avatar: true,
              profile: true,
            },
>>>>>>> 744bd99 (Update code from new location)
          },
        },
        orderBy: { createdAt: "desc" },
      });
<<<<<<< HEAD
    }

    else if (type === "received") {
      if (!userId) {
        return NextResponse.json(
          { success: false, error: "User ID required" },
          { status: 400 }
        );
      }

      contactRequests = await prisma.contactRequest.findMany({
        where: { freelancerId: Number(userId) },
        include: {
          client: {
            select: { id: true, name: true, email: true },
=======
    } else if (type === "received") {
      // Get contact requests received by this user (as freelancer)
      contactRequests = await prisma.contactRequest.findMany({
        where: {
          freelancerId: parseInt(userId),
        },
        include: {
          client: {
            select: {
              id: true,
              name: true,
              email: true,
              avatar: true,
              profile: true,
            },
>>>>>>> 744bd99 (Update code from new location)
          },
        },
        orderBy: { createdAt: "desc" },
      });
<<<<<<< HEAD
    }

    else if (type === "website") {
      const submissions = await prisma.contactSubmission.findMany({
        orderBy: { createdAt: "desc" },
      });

      contactRequests = submissions.map((s) => ({
        id: s.id,
        subject: `${s.service} Inquiry`,
        message: s.message,
        status: s.status,
        createdAt: s.createdAt,
        client: {
          name: s.name,
          email: s.email,
          profile: { phone: s.phone },
        },
        isWebsiteSubmission: true,
      }));
    }

    else {
      return NextResponse.json(
        { success: false, error: "Invalid type" },
=======
    } else if (type === "website") {
      // Get website contact form submissions
      const websiteSubmissions = await prisma.contactSubmission.findMany({
        where: {
          status: {
            in: [
              "new",
              "pending",
              "in_progress",
              "accepted",
              "rejected",
              "completed",
            ],
          },
        },
        orderBy: { createdAt: "desc" },
      });

      // Convert website submissions to contact request format for the UI
      contactRequests = websiteSubmissions.map((submission) => ({
        id: submission.id,
        subject: `${submission.service} Inquiry`,
        message: submission.message,
        status: mapSubmissionStatus(submission.status),
        createdAt: submission.createdAt,
        client: {
          name: submission.name,
          email: submission.email,
          profile: {
            phone: submission.phone,
          },
        },
        projectDetails: `Service: ${
          submission.service
        }\nType: Website Contact Form\nSource: ${
          submission.source || "Website"
        }`,
        isWebsiteSubmission: true, // Flag to identify website submissions
      }));
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid type parameter. Use 'sent', 'received', or 'website'",
        },
>>>>>>> 744bd99 (Update code from new location)
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      contactRequests,
      count: contactRequests.length,
<<<<<<< HEAD
    });
  } catch (error) {
    console.error("Contact GET error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ================== POST ==================
=======
      type: type,
    });
  } catch (error) {
    console.error("Error fetching contact requests:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch contact requests",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Handle POST requests for new contact submissions
>>>>>>> 744bd99 (Update code from new location)
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      message,
      type = "website_contact",
<<<<<<< HEAD
      source,
=======
      source = "website_contact_page",
>>>>>>> 744bd99 (Update code from new location)
      clientId,
      freelancerId,
      subject,
      projectDetails,
    } = body;

<<<<<<< HEAD
    // WEBSITE CONTACT
    if (type === "website_contact") {
      const submission = await prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone,
=======
    // Handle website contact form submissions
    if (type === "website_contact") {
      // Validate required fields for website contact
      if (!name || !email || !service || !message) {
        return NextResponse.json(
          {
            success: false,
            error: "Name, email, service, and message are required",
          },
          { status: 400 }
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Please provide a valid email address" },
          { status: 400 }
        );
      }

      // Create contact form submission
      const contactSubmission = await prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone: phone || null,
>>>>>>> 744bd99 (Update code from new location)
          service,
          message,
          type,
          source,
<<<<<<< HEAD
        },
      });

      return NextResponse.json({
        success: true,
        submissionId: submission.id,
      });
    }

    // FREELANCER CONTACT
    if (type === "freelancer_contact") {
      const req = await prisma.contactRequest.create({
        data: {
          clientId: Number(clientId),
          freelancerId: Number(freelancerId),
          subject,
          message,
          projectDetails,
        },
      });

      return NextResponse.json({
        success: true,
        id: req.id,
=======
          status: "new",
        },
      });

      console.log("Website contact form submitted:", {
        id: contactSubmission.id,
        name,
        email,
        service,
      });

      return NextResponse.json({
        success: true,
        message:
          "Thank you for your message! We'll get back to you within 1 hour.",
        submissionId: contactSubmission.id,
      });
    }

    // Handle freelancer contact requests (from the platform)
    if (type === "freelancer_contact") {
      // Validate required fields for freelancer contact
      if (!clientId || !freelancerId || !subject || !message) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Client ID, freelancer ID, subject, and message are required",
          },
          { status: 400 }
        );
      }

      // Check if client has premium plan (if required)
      const clientPlan = await prisma.userPlan.findUnique({
        where: { userId: parseInt(clientId) },
      });

      if (!clientPlan || clientPlan.planType !== "premium") {
        return NextResponse.json(
          {
            success: false,
            error: "Premium plan required to contact freelancers",
          },
          { status: 403 }
        );
      }

      // Check if freelancer exists
      const freelancer = await prisma.user.findUnique({
        where: { id: parseInt(freelancerId) },
        select: { id: true, name: true, email: true },
      });

      if (!freelancer) {
        return NextResponse.json(
          { success: false, error: "Freelancer not found" },
          { status: 404 }
        );
      }

      // Create contact request
      const contactRequest = await prisma.contactRequest.create({
        data: {
          clientId: parseInt(clientId),
          freelancerId: parseInt(freelancerId),
          subject,
          message,
          projectDetails: projectDetails || null,
          status: "pending",
        },
        include: {
          client: {
            select: {
              name: true,
              email: true,
            },
          },
          freelancer: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });

      console.log("Contact request created:", contactRequest.id);

      return NextResponse.json({
        success: true,
        message: "Contact request sent successfully",
        contactRequest: {
          id: contactRequest.id,
          subject: contactRequest.subject,
          createdAt: contactRequest.createdAt,
        },
>>>>>>> 744bd99 (Update code from new location)
      });
    }

    return NextResponse.json(
<<<<<<< HEAD
      { success: false, error: "Invalid type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Contact POST error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
=======
      { success: false, error: "Invalid type parameter" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    // Handle specific Prisma errors
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          success: false,
          error: "A submission with this email already exists",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process your request. Please try again.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to map submission status to request status
function mapSubmissionStatus(submissionStatus) {
  const statusMap = {
    new: "pending",
    pending: "pending",
    in_progress: "accepted",
    accepted: "accepted",
    rejected: "rejected",
    completed: "completed",
  };

  return statusMap[submissionStatus] || "pending";
}
>>>>>>> 744bd99 (Update code from new location)
