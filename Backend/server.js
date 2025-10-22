import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const uploadDir = process.env.UPLOAD_PATH || "uploads";
const eventsUploadDir = path.join(uploadDir, "events");
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadDir));

// Create upload directories
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
if (!fs.existsSync(eventsUploadDir)) {
  fs.mkdirSync(eventsUploadDir, { recursive: true });
}

// Configure Multer for file uploads (blogs)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Configure Multer for event images
const eventStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, eventsUploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) cb(null, true);
  else
    cb(
      new Error(
        "Invalid file type. Only images, PDFs, and documents are allowed."
      )
    );
};

const imageFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) cb(null, true);
  else cb(new Error("Only image files are allowed!"));
};

// Blog file upload
const upload = multer({
  storage: multer.diskStorage({
    destination: (_, __, cb) => cb(null, uploadDir),
    filename: (_, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter,
});

// Event image upload
const uploadEventImages = multer({
  storage: multer.diskStorage({
    destination: (_, __, cb) => cb(null, eventsUploadDir),
    filename: (_, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: imageFilter,
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/biocrats", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true, minlength: 8 },
  year: { type: Number, required: true },
  program: {
    type: String,
    required: true,
    enum: ["B.Tech", "M.Tech", "PhD", "MS"],
  },
  jobRole: { type: String, required: true, trim: true },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  files: [
    {
      filename: String,
      originalName: String,
      path: String,
      size: Number,
      mimetype: String,
    },
  ],
  author: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    email: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

// Event Schema - Updated to match frontend requirements
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["Upcoming", "Past Event"],
    default: "Upcoming",
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "",
  },
  participants: {
    type: String,
    default: "",
  },
  speaker: {
    type: String,
    default: "",
  },
  Speaker: {
    // Added for compatibility with frontend
    type: String,
    default: "",
  },
  category: {
    type: String,
    enum: ["workshop", "competition", "symposium", "seminar"],
    default: "workshop",
  },
  images: [
    {
      type: String,
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Transform _id to id for frontend compatibility
eventSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    return ret;
  },
});

const Event = mongoose.model("Event", eventSchema);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Access token required" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Invalid or expired token" });
    req.user = user;
    next();
  });
}

// Middleware to verify admin
function authenticateAdmin(req, res, next) {
  authenticateToken(req, res, async () => {
    try {
      const user = await User.findById(req.user.userId);
      if (!user || !user.isAdmin) {
        return res.status(403).json({
          success: false,
          message: "Access denied. Admin privileges required.",
        });
      }
      next();
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });
}

// ==================== USER ROUTES ====================

// Signup Route
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, year, program, jobRole } = req.body;
    if (!name || !email || !password || !year || !program || !jobRole)
      return res.status(400).json({ message: "All fields are required" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Invalid email format" });

    if (password.length < 8)
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "Email already registered" });

    const user = new User({
      name,
      email,
      password,
      year: parseInt(year),
      program,
      jobRole,
      isAdmin: false,
    });
    await user.save();

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        year: user.year,
        program: user.program,
        jobRole: user.jobRole,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password are required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        year: user.year,
        program: user.program,
        jobRole: user.jobRole,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Get user profile (protected)
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (error) {
    console.error("Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ==================== BLOG ROUTES ====================

// Create blog
app.post(
  "/api/blogs",
  authenticateToken,
  upload.array("files", 5),
  async (req, res) => {
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
            path: `/uploads/${file.filename}`,
            size: file.size,
            mimetype: file.mimetype,
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
  }
);

// Get all blogs (pagination)
app.get("/api/blogs", async (req, res) => {
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
app.get("/api/blogs/my-blogs", authenticateToken, async (req, res) => {
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
app.get("/api/blogs/:id", async (req, res) => {
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
app.put(
  "/api/blogs/:id",
  authenticateToken,
  upload.array("files", 5),
  async (req, res) => {
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
            path: `/uploads/${file.filename}`,
            size: file.size,
            mimetype: file.mimetype,
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
  }
);

// Delete blog
app.delete("/api/blogs/:id", authenticateToken, async (req, res) => {
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

    if (blog.files && blog.files.length) {
      blog.files.forEach((file) => {
        const filePath = path.join(__dirname, uploadDir, file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
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

// ==================== EVENT ROUTES ====================

// GET all events (Public route)
app.get("/api/events", async (req, res) => {
  try {
    const { status, category } = req.query;
    let query = {};

    if (status && status !== "all") {
      query.status = status === "upcoming" ? "Upcoming" : "Past Event";
    }

    if (category && category !== "all") {
      query.category = category;
    }

    const events = await Event.find(query).sort({ createdAt: -1 }).lean();

    // Transform events to include both _id and id
    const transformedEvents = events.map((event) => ({
      ...event,
      id: event._id.toString(),
      _id: event._id.toString(),
    }));

    res.json({ success: true, events: transformedEvents });
  } catch (error) {
    console.error("Get events error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single event by ID (Public route)
app.get("/api/events/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).lean();
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    // Add id field for frontend compatibility
    const transformedEvent = {
      ...event,
      id: event._id.toString(),
      _id: event._id.toString(),
    };

    res.json({ success: true, event: transformedEvent });
  } catch (error) {
    console.error("Get event error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// CREATE new event (Admin only)
app.post(
  "/api/events",
  authenticateAdmin,
  uploadEventImages.array("images", 10),
  async (req, res) => {
    try {
      const {
        title,
        description,
        fullDescription,
        status,
        date,
        location,
        participants,
        speaker,
        category,
      } = req.body;

      if (!title || !description || !date) {
        return res.status(400).json({
          success: false,
          message: "Title, description, and date are required",
        });
      }

      // Get image paths
      const images = req.files.map((f) => `/uploads/events/${f.filename}`);

      const event = new Event({
        title,
        description,
        fullDescription: fullDescription || "",
        status: status || "Upcoming",
        date,
        location: location || "",
        participants: participants || "",
        speaker: speaker || "",
        Speaker: speaker || "",
        category: category || "workshop",
        images,
        createdBy: req.user.userId,
      });

      await event.save();

      // Transform response
      const savedEvent = event.toObject();
      savedEvent.id = savedEvent._id.toString();
      event.images = event.images.map((img) => `${BASE_URL}${img}`);

      res.status(201).json({
        success: true,
        event: savedEvent,
        message: "Event created successfully",
      });
    } catch (error) {
      console.error("Create event error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

// UPDATE event (Admin only)
app.put(
  "/api/events/:id",
  authenticateAdmin,
  uploadEventImages.array("images", 10),
  async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res
          .status(404)
          .json({ success: false, message: "Event not found" });
      }

      const {
        title,
        description,
        fullDescription,
        status,
        date,
        location,
        participants,
        speaker,
        category,
        existingImages,
      } = req.body;

      // Handle images
      let images = Array.isArray(existingImages)
        ? existingImages
        : existingImages
        ? [existingImages]
        : [];

      if (req.files && req.files.length > 0) {
        const newImages = req.files.map(
          (file) => `/uploads/events/${file.filename}`
        );
        images = [...images, ...newImages];
      }

      // Update fields
      if (title) event.title = title;
      if (description) event.description = description;
      if (fullDescription !== undefined)
        event.fullDescription = fullDescription;
      if (status) event.status = status;
      if (date) event.date = date;
      if (location !== undefined) event.location = location;
      if (participants !== undefined) event.participants = participants;
      if (speaker !== undefined) {
        event.speaker = speaker;
        event.Speaker = speaker;
      }
      if (category) event.category = category;
      if (images.length > 0) event.images = images;

      event.updatedAt = new Date();

      await event.save();
      event.images = event.images.map((img) => `${BASE_URL}${img}`);

      // Transform response
      const updatedEvent = event.toObject();
      updatedEvent.id = updatedEvent._id.toString();

      res.json({
        success: true,
        event: updatedEvent,
        message: "Event updated successfully",
      });
    } catch (error) {
      console.error("Update event error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

// DELETE event (Admin only)
app.delete("/api/events/:id", authenticateAdmin, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    // Delete associated images
    if (event.images && event.images.length) {
      event.images.forEach((imgPath) => {
        const filename = path.basename(imgPath);
        const filePath = path.join(eventsUploadDir, filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
    }

    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error("Delete event error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// ==================== ERROR HANDLERS ====================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "File size too large. Maximum size is 5MB for events.",
      });
    }
    return res.status(400).json({ success: false, message: err.message });
  }
  res.status(500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Uploads directory: ${uploadDir}`);
  console.log(`📁 Events uploads directory: ${eventsUploadDir}`);
});
