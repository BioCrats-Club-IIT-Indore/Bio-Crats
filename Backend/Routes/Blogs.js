import express from "express";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import { authenticateToken } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// Create blog
router.post("/", authenticateToken, upload.array("files", 5), async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res
        .status(400)
        .json({ success: false, message: "Title and content are required" });

    const user = await User.findById(req.user.userId);

    const files = req.files
      ? req.files.map((file) => ({
          filename: file.filename,
          originalName: file.originalname,
          url: file.path,
          publicId: file.filename,
          size: file.size,
          mimetype: file.mimetype,
          format: file.format,
        }))
      : [];

    const blog = new Blog({
      title: title.trim(),
      content: content.trim(),
      files,
      author: { id: user._id, name: user.name, email: user.email },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await blog.save();

    res
      .status(201)
      .json({ success: true, message: "Blog created successfully", blog });
  } catch (error) {
    console.error("Create blog error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while creating blog" });
  }
});

// Get all blogs (pagination)
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Blog.countDocuments();
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    res.json({
      success: true,
      blogs,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("Get blogs error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while fetching blogs" });
  }
});

// Get user's blogs
router.get("/my-blogs", authenticateToken, async (req, res) => {
  try {
    const blogs = await Blog.find({ "author.id": req.user.userId })
      .sort({ createdAt: -1 })
      .lean();
    res.json({ success: true, blogs });
  } catch (error) {
    console.error("Get my blogs error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching your blogs",
    });
  }
});

// Get single blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).lean();
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.json({ success: true, blog });
  } catch (error) {
    console.error("Get blog error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while fetching blog" });
  }
});

// Update blog
router.put("/:id", authenticateToken, upload.array("files", 5), async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    if (blog.author.id.toString() !== req.user.userId)
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this blog",
      });

    const newFiles = req.files
      ? req.files.map((file) => ({
          filename: file.filename,
          originalName: file.originalname,
          url: file.path,
          publicId: file.filename,
          size: file.size,
          mimetype: file.mimetype,
          format: file.format,
        }))
      : [];

    if (title) blog.title = title.trim();
    if (content) blog.content = content.trim();
    blog.files = [...blog.files, ...newFiles];
    blog.updatedAt = new Date();
    await blog.save();

    res.json({ success: true, message: "Blog updated successfully", blog });
  } catch (error) {
    console.error("Update blog error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while updating blog" });
  }
});

// Delete blog
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    if (blog.author.id.toString() !== req.user.userId)
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this blog",
      });

    // Delete files from Cloudinary
    if (blog.files && blog.files.length) {
      for (const file of blog.files) {
        try {
          await cloudinary.uploader.destroy(file.publicId);
        } catch (err) {
          console.error("Error deleting file from Cloudinary:", err);
        }
      }
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Delete blog error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while deleting blog" });
  }
});

export default router;