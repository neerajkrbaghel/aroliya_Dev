import cloudinary from "./cloudinary-config.js";

export async function uploadToCloudinary(file, folder = "uploads") {
  try {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);

    const fileName = `${timestamp}_${randomString}`;

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder,
          public_id: fileName,
          resource_type: "auto", // image, video, pdf sab support
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Public URL return (same like S3)
    return result.secure_url;

  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error(`Failed to upload to Cloudinary: ${error.message}`);
  }
}
