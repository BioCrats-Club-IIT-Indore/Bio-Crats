
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Ensure uploads directory exists
const uploadDir = process.env.UPLOAD_PATH || 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept images, PDFs, and documents
  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images, PDFs, and documents are allowed.'));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024 // 10MB default
  },
  fileFilter: fileFilter
});

// In-memory databases (replace with actual database in production)
const users = [];
const blogs = [];

// Utility Functions
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
    req.user = user;
    next();
  });
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size is 10MB.'
      });
    }
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});


// Get current user
app.get('/api/auth/me', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  res.json({
    success: true,
    id: user.id,
    name: user.name,
    email: user.email
  });
});

// 2. BLOG ROUTES

// Create blog
app.post('/api/blogs', authenticateToken, upload.array('files', 5), (req, res) => {
  try {
    const { title, content } = req.body;
    const user = users.find(u => u.id === req.user.id);

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required'
      });
    }

    const files = req.files ? req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      path: `/uploads/${file.filename}`,
      size: file.size,
      mimetype: file.mimetype
    })) : [];

    const blog = {
      id: blogs.length + 1,
      title: title.trim(),
      content: content.trim(),
      files,
      author: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    blogs.push(blog);

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    console.error('Create blog error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating blog'
    });
  }
});

// Get all blogs (with pagination)
app.get('/api/blogs', (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Sort blogs by creation date (newest first)
    const sortedBlogs = [...blogs].sort((a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
    );

    const paginatedBlogs = sortedBlogs.slice(skip, skip + limit);

    res.json({
      success: true,
      blogs: paginatedBlogs,
      pagination: {
        page,
        limit,
        total: blogs.length,
        pages: Math.ceil(blogs.length / limit)
      }
    });
  } catch (error) {
    console.error('Get blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching blogs'
    });
  }
});

// Get user's blogs
app.get('/api/blogs/my-blogs', authenticateToken, (req, res) => {
  try {
    const userBlogs = blogs
      .filter(b => b.author.id === req.user.id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      success: true,
      blogs: userBlogs
    });
  } catch (error) {
    console.error('Get my blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching your blogs'
    });
  }
});

// Get single blog
app.get('/api/blogs/:id', (req, res) => {
  try {
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    res.json({
      success: true,
      blog
    });
  } catch (error) {
    console.error('Get blog error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching blog'
    });
  }
});

// Update blog
app.put('/api/blogs/:id', authenticateToken, upload.array('files', 5), (req, res) => {
  try {
    const { title, content } = req.body;
    const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));

    if (blogIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    if (blogs[blogIndex].author.id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this blog'
      });
    }

    const newFiles = req.files ? req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      path: `/uploads/${file.filename}`,
      size: file.size,
      mimetype: file.mimetype
    })) : [];

    blogs[blogIndex] = {
      ...blogs[blogIndex],
      title: title ? title.trim() : blogs[blogIndex].title,
      content: content ? content.trim() : blogs[blogIndex].content,
      files: [...blogs[blogIndex].files, ...newFiles],
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Blog updated successfully',
      blog: blogs[blogIndex]
    });
  } catch (error) {
    console.error('Update blog error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating blog'
    });
  }
});

// Delete blog
app.delete('/api/blogs/:id', authenticateToken, (req, res) => {
  try {
    const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));

    if (blogIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    if (blogs[blogIndex].author.id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this blog'
      });
    }

    // Delete associated files
    const blog = blogs[blogIndex];
    blog.files.forEach(file => {
      const filePath = path.join(__dirname, uploadDir, file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    blogs.splice(blogIndex, 1);

    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Delete blog error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting blog'
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Uploads directory: ${uploadDir}`);
  console.log(`🔐 JWT Secret: ${JWT_SECRET === 'your-secret-key-change-in-production' ? '⚠️  Using default secret (change in production!)' : '✅ Custom secret configured'}`);
});