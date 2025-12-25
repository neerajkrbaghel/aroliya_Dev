import { NextResponse } from "next/server";
<<<<<<< HEAD
import { uploadToCloudinary } from "@/lib/upload-cloud";

=======
import { uploadToS3 } from "@/lib/s3-upload";
>>>>>>> 744bd99 (Update code from new location)

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = [".pdf", ".doc", ".docx"];
    const fileExtension = "." + file.name.split(".").pop().toLowerCase();

    if (!allowedTypes.includes(fileExtension)) {
      return NextResponse.json(
        { error: "Invalid file type. Only PDF, DOC, DOCX files are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size too large. Maximum size is 5MB." },
        { status: 400 }
      );
    }

    // Upload to AWS S3
<<<<<<< HEAD
    const fileUrl = await uploadToCloudinary(file, "resumes");
=======
    const fileUrl = await uploadToS3(file, "resumes");
>>>>>>> 744bd99 (Update code from new location)

    return NextResponse.json({
      success: true,
      url: fileUrl,
      filename: file.name,
      size: file.size,
    });
  } catch (error) {
    console.error("Resume upload error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
