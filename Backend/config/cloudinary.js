import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log("Cloudinary Config:", {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY ? "Loaded" : "Missing",
  secret: process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Missing"
});

// Cloudinary Storage for Blog Files
export const blogStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads/blogs",
    allowed_formats: ["jpg", "jpeg", "png", "gif", "pdf", "doc", "docx", "txt"],
    resource_type: "auto",
  },
});

// Cloudinary Storage for Event Images
export const eventStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads/events",
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    resource_type: "image",
  },
});

export default cloudinary;