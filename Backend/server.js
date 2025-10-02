// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/biocrats', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB Connected'))
// .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 8
//   },
//   year: {
//     type: Number,
//     required: true
//   },
//   program: {
//     type: String,
//     required: true,
//     enum: ['B.Tech', 'M.Tech', 'PhD', 'MS']
//   },
//   jobRole: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Hash password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Method to compare passwords
// userSchema.methods.comparePassword = async function(candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// // Routes

// // Health check
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'OK', message: 'Server is running' });
// });

// // Signup Route
// app.post('/api/signup', async (req, res) => {
//   try {
//     const { name, email, password, year, program, jobRole } = req.body;

//     // Validation
//     if (!name || !email || !password || !year || !program || !jobRole) {
//       return res.status(400).json({
//         message: 'All fields are required'
//       });
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         message: 'Invalid email format'
//       });
//     }

//     // Password length validation
//     if (password.length < 8) {
//       return res.status(400).json({
//         message: 'Password must be at least 8 characters long'
//       });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({
//         message: 'Email already registered'
//       });
//     }

//     // Create new user
//     const user = new User({
//       name,
//       email,
//       password,
//       year: parseInt(year),
//       program,
//       jobRole
//     });

//     await user.save();

//     // Generate JWT token
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET || 'your-secret-key-change-in-production',
//       { expiresIn: '7d' }
//     );

//     res.status(201).json({
//       message: 'User created successfully',
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         year: user.year,
//         program: user.program,
//         jobRole: user.jobRole
//       }
//     });

//   } catch (error) {
//     console.error('Signup Error:', error);
//     res.status(500).json({
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // Login Route
// app.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         message: 'Email and password are required'
//       });
//     }

//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({
//         message: 'Invalid email or password'
//       });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({
//         message: 'Invalid email or password'
//       });
//     }

//     // Generate token
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET || 'your-secret-key-change-in-production',
//       { expiresIn: '7d' }
//     );

//     res.json({
//       message: 'Login successful',
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         year: user.year,
//         program: user.program,
//         jobRole: user.jobRole
//       }
//     });

//   } catch (error) {
//     console.error('Login Error:', error);
//     res.status(500).json({
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // Get user profile (protected route example)
// app.get('/api/profile', authenticateToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ user });
//   } catch (error) {
//     console.error('Profile Error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Middleware to authenticate JWT token
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Access token required' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production', (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid or expired token' });
//     }
//     req.user = user;
//     next();
//   });
// }

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     message: 'Something went wrong!',
//     error: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });

// const PORT = process.env.PORT || 5000;

// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static('uploads'));

// // Ensure uploads directory exists
// const uploadDir = process.env.UPLOAD_PATH || 'uploads';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   // Accept images, PDFs, and documents
//   const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb(new Error('Invalid file type. Only images, PDFs, and documents are allowed.'));
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024 // 10MB default
//   },
//   fileFilter: fileFilter
// });

// // In-memory databases (replace with actual database in production)
// const users = [];
// const blogs = [];

// // Utility Functions
// const generateToken = (user) => {
//   return jwt.sign(
//     { id: user.id, email: user.email },
//     JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRE || '7d' }
//   );
// };


// // Error handling middleware
// const errorHandler = (err, req, res, next) => {
//   console.error(err.stack);

//   if (err instanceof multer.MulterError) {
//     if (err.code === 'LIMIT_FILE_SIZE') {
//       return res.status(400).json({
//         success: false,
//         message: 'File size too large. Maximum size is 10MB.'
//       });
//     }
//     return res.status(400).json({
//       success: false,
//       message: err.message
//     });
//   }

//   res.status(500).json({
//     success: false,
//     message: err.message || 'Internal server error'
//   });
// };

// // // Get current user
// // app.get('/api/auth/me', authenticateToken, (req, res) => {
// //   const user = users.find(u => u.id === req.user.id);
// //   if (!user) {
// //     return res.status(404).json({
// //       success: false,
// //       message: 'User not found'
// //     });
// //   }
// //   res.json({
// //     success: true,
// //     id: user.id,
// //     name: user.name,
// //     email: user.email
// //   });
// // });

// // 2. BLOG ROUTES

// // Create blog
// app.post('/api/blogs', authenticateToken, upload.array('files', 5), (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const user = users.find(u => u.id === req.user.id);

//     if (!title || !content) {
//       return res.status(400).json({
//         success: false,
//         message: 'Title and content are required'
//       });
//     }

//     const files = req.files ? req.files.map(file => ({
//       filename: file.filename,
//       originalName: file.originalname,
//       path: `/uploads/${file.filename}`,
//       size: file.size,
//       mimetype: file.mimetype
//     })) : [];

//     const blog = {
//       id: blogs.length + 1,
//       title: title.trim(),
//       content: content.trim(),
//       files,
//       author: {
//         id: user.id,
//         name: user.name,
//         email: user.email
//       },
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString()
//     };

//     blogs.push(blog);

//     res.status(201).json({
//       success: true,
//       message: 'Blog created successfully',
//       blog
//     });
//   } catch (error) {
//     console.error('Create blog error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while creating blog'
//     });
//   }
// });

// // Get all blogs (with pagination)
// app.get('/api/blogs', (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const skip = (page - 1) * limit;

//     // Sort blogs by creation date (newest first)
//     const sortedBlogs = [...blogs].sort((a, b) =>
//       new Date(b.createdAt) - new Date(a.createdAt)
//     );

//     const paginatedBlogs = sortedBlogs.slice(skip, skip + limit);

//     res.json({
//       success: true,
//       blogs: paginatedBlogs,
//       pagination: {
//         page,
//         limit,
//         total: blogs.length,
//         pages: Math.ceil(blogs.length / limit)
//       }
//     });
//   } catch (error) {
//     console.error('Get blogs error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while fetching blogs'
//     });
//   }
// });

// // Get user's blogs
// app.get('/api/blogs/my-blogs', authenticateToken, (req, res) => {
//   try {
//     const userBlogs = blogs
//       .filter(b => b.author.id === req.user.id)
//       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//     res.json({
//       success: true,
//       blogs: userBlogs
//     });
//   } catch (error) {
//     console.error('Get my blogs error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while fetching your blogs'
//     });
//   }
// });

// // Get single blog
// app.get('/api/blogs/:id', (req, res) => {
//   try {
//     const blog = blogs.find(b => b.id === parseInt(req.params.id));
//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: 'Blog not found'
//       });
//     }
//     res.json({
//       success: true,
//       blog
//     });
//   } catch (error) {
//     console.error('Get blog error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while fetching blog'
//     });
//   }
// });

// // Update blog
// app.put('/api/blogs/:id', authenticateToken, upload.array('files', 5), (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));

//     if (blogIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: 'Blog not found'
//       });
//     }

//     if (blogs[blogIndex].author.id !== req.user.id) {
//       return res.status(403).json({
//         success: false,
//         message: 'Not authorized to update this blog'
//       });
//     }

//     const newFiles = req.files ? req.files.map(file => ({
//       filename: file.filename,
//       originalName: file.originalname,
//       path: `/uploads/${file.filename}`,
//       size: file.size,
//       mimetype: file.mimetype
//     })) : [];

//     blogs[blogIndex] = {
//       ...blogs[blogIndex],
//       title: title ? title.trim() : blogs[blogIndex].title,
//       content: content ? content.trim() : blogs[blogIndex].content,
//       files: [...blogs[blogIndex].files, ...newFiles],
//       updatedAt: new Date().toISOString()
//     };

//     res.json({
//       success: true,
//       message: 'Blog updated successfully',
//       blog: blogs[blogIndex]
//     });
//   } catch (error) {
//     console.error('Update blog error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while updating blog'
//     });
//   }
// });

// // Delete blog
// app.delete('/api/blogs/:id', authenticateToken, (req, res) => {
//   try {
//     const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));

//     if (blogIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: 'Blog not found'
//       });
//     }

//     if (blogs[blogIndex].author.id !== req.user.id) {
//       return res.status(403).json({
//         success: false,
//         message: 'Not authorized to delete this blog'
//       });
//     }

//     // Delete associated files
//     const blog = blogs[blogIndex];
//     blog.files.forEach(file => {
//       const filePath = path.join(__dirname, uploadDir, file.filename);
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }
//     });

//     blogs.splice(blogIndex, 1);

//     res.json({
//       success: true,
//       message: 'Blog deleted successfully'
//     });
//   } catch (error) {
//     console.error('Delete blog error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while deleting blog'
//     });
//   }
// });

// // 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// // Error handling middleware (must be last)
// app.use(errorHandler);

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log(`📁 Uploads directory: ${uploadDir}`);
//   console.log(`🔐 JWT Secret: ${JWT_SECRET === 'your-secret-key-change-in-production' ? '⚠️  Using default secret (change in production!)' : '✅ Custom secret configured'}`);
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
// server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const uploadDir = process.env.UPLOAD_PATH || 'uploads';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(uploadDir));

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) cb(null, true);
  else cb(new Error('Invalid file type. Only images, PDFs, and documents are allowed.'));
};
const upload = multer({
  storage: storage,
  limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024 }, // 10MB
  fileFilter
});

// MongoDB & User Model
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/biocrats', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8 },
  year: { type: Number, required: true },
  program: { type: String, required: true, enum: ['B.Tech', 'M.Tech', 'PhD', 'MS'] },
  jobRole: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.model('User', userSchema);

// Blog Model
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  files: [{
    filename: String, originalName: String, path: String, size: Number, mimetype: String
  }],
  author: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    email: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});


// Middleware to verify token (simplified - use JWT in production)
 function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Access token required' });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });
    req.user = user; // contains userId and email
    next();
  });
}

// Signup Route
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password, year, program, jobRole } = req.body;
    if (!name || !email || !password || !year || !program || !jobRole)
      return res.status(400).json({ message: 'All fields are required' });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid email format' });
    if (password.length < 8) return res.status(400).json({ message: 'Password must be at least 8 characters long' });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'Email already registered' });

    const user = new User({ name, email, password, year: parseInt(year), program, jobRole });
    await user.save();

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id, name: user.name, email: user.email,
        year: user.year, program: user.program, jobRole: user.jobRole
      }
    });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id, name: user.name, email: user.email,
        year: user.year, program: user.program, jobRole: user.jobRole
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Get user profile (protected)
app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (error) {
    console.error('Profile Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create blog
app.post('/api/blogs', authenticateToken, upload.array('files', 5), async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(400).json({ success: false, message: 'Title and content are required' });

    const user = await User.findById(req.user.userId);

    const files = req.files ? req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      path: `/uploads/${file.filename}`,
      size: file.size,
      mimetype: file.mimetype
    })) : [];

    const blog = new Blog({
      title: title.trim(),
      content: content.trim(),
      files,
      author: { id: user._id, name: user.name, email: user.email },
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await blog.save();

    res.status(201).json({ success: true, message: 'Blog created successfully', blog });
  } catch (error) {
    console.error('Create blog error:', error);
    res.status(500).json({ success: false, message: 'Server error while creating blog' });
  }
});

// Get all blogs (pagination)
app.get('/api/blogs', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Blog.countDocuments();
    const blogs = await Blog.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean();

    res.json({
      success: true,
      blogs,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    console.error('Get blogs error:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching blogs' });
  }
});

// Get user's blogs
app.get('/api/blogs/my-blogs', authenticateToken, async (req, res) => {
  try {
    const blogs = await Blog.find({ 'author.id': req.user.userId }).sort({ createdAt: -1 }).lean();
    res.json({ success: true, blogs });
  } catch (error) {
    console.error('Get my blogs error:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching your blogs' });
  }
});

// Get single blog
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).lean();
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, blog });
  } catch (error) {
    console.error('Get blog error:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching blog' });
  }
});

// Update blog
app.put('/api/blogs/:id', authenticateToken, upload.array('files', 5), async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    if (blog.author.id.toString() !== req.user.userId)
      return res.status(403).json({ success: false, message: 'Not authorized to update this blog' });

    const newFiles = req.files ? req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      path: `/uploads/${file.filename}`,
      size: file.size,
      mimetype: file.mimetype
    })) : [];

    if (title) blog.title = title.trim();
    if (content) blog.content = content.trim();
    blog.files = [...blog.files, ...newFiles];
    blog.updatedAt = new Date();
    await blog.save();

    res.json({ success: true, message: 'Blog updated successfully', blog });
  } catch (error) {
    console.error('Update blog error:', error);
    res.status(500).json({ success: false, message: 'Server error while updating blog' });
  }
});

// Delete blog
app.delete('/api/blogs/:id', authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    if (blog.author.id.toString() !== req.user.userId)
      return res.status(403).json({ success: false, message: 'Not authorized to delete this blog' });

    // Delete associated files
    if (blog.files && blog.files.length) {
      blog.files.forEach(file => {
        const filePath = path.join(__dirname, uploadDir, file.filename);
        if (fs.existsSync(filePath)) { fs.unlinkSync(filePath); }
      });
    }
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Delete blog error:', error);
    res.status(500).json({ success: false, message: 'Server error while deleting blog' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, message: 'File size too large. Maximum size is 10MB.' });
    }
    return res.status(400).json({ success: false, message: err.message });
  }
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Uploads directory: ${uploadDir}`);
  console.log(
    `🔐 JWT Secret: ${
      JWT_SECRET === 'your-secret-key-change-in-production'
        ? '⚠️  Using default secret (change in production!)'
        : '✅ Custom secret configured'
    }`
  );
});
