import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
import { prisma } from "../../../lib/prisma";


// ================== GET ==================
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const type = searchParams.get("type"); // sent | received | website

    let contactRequests = [];

    if (type === "sent") {
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
          },
        },
        orderBy: { createdAt: "desc" },
      });
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
          },
        },
        orderBy: { createdAt: "desc" },
      });
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
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      contactRequests,
      count: contactRequests.length,
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
      source,
      clientId,
      freelancerId,
      subject,
      projectDetails,
    } = body;

    // WEBSITE CONTACT
    if (type === "website_contact") {
      const submission = await prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone,
          service,
          message,
          type,
          source,
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
      });
    }

    return NextResponse.json(
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
