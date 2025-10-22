import multer from "multer";
import { blogStorage, eventStorage } from "../config/cloudinary.js";

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
  const extname = allowedTypes.test(file.originalname.toLowerCase());
  if (extname) cb(null, true);
  else
    cb(
      new Error(
        "Invalid file type. Only images, PDFs, and documents are allowed."
      )
    );
};

const imageFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(file.originalname.toLowerCase());
  if (extname) cb(null, true);
  else cb(new Error("Only image files are allowed!"));
};

// Blog file upload with Cloudinary
export const upload = multer({
  storage: blogStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter,
});

// Event image upload with Cloudinary
export const uploadEventImages = multer({
  storage: eventStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: imageFilter,
});