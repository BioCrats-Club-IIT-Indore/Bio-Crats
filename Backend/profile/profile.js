const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, GIF, PDF, DOC, DOCX are allowed.'));
    }
  }
});

// In-memory data storage (replace with database in production)
let users = [];
let blogs = [];
let userProfiles = {};

// Middleware to verify token (simplified - use JWT in production)
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No authorization token provided' });
  }

  const token = authHeader.split(' ')[1];
  const user = users.find(u => u.token === token);

  if (!user) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = user;
  next();
};

// Get user profile
app.get('/api/profile', authenticateUser, (req, res) => {
  const profile = userProfiles[req.user.id] || {
    userId: req.user.id,
    username: req.user.username,
    email: req.user.email,
    bio: '',
    avatar: null,
    joinedDate: new Date().toISOString()
  };

  res.json(profile);
});

// Update user profile
app.put('/api/profile', authenticateUser, (req, res) => {
  const { bio, username } = req.body;

  userProfiles[req.user.id] = {
    ...userProfiles[req.user.id],
    userId: req.user.id,
    username: username || req.user.username,
    email: req.user.email,
    bio: bio || '',
    joinedDate: userProfiles[req.user.id]?.joinedDate || new Date().toISOString()
  };

  res.json(userProfiles[req.user.id]);
});

// Upload profile avatar
app.post('/api/profile/avatar', authenticateUser, upload.single('avatar'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const avatarUrl = `/uploads/${req.file.filename}`;

  userProfiles[req.user.id] = {
    ...userProfiles[req.user.id],
    avatar: avatarUrl
  };

  res.json({ avatarUrl });
});

// Create a new blog post
app.post('/api/blogs', authenticateUser, upload.array('files', 5), (req, res) => {
  const { title, content, tags } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const files = req.files ? req.files.map(file => ({
    filename: file.originalname,
    path: `/uploads/${file.filename}`,
    size: file.size,
    mimetype: file.mimetype
  })) : [];

  const blog = {
    id: blogs.length + 1,
    userId: req.user.id,
    username: req.user.username,
    title,
    content,
    tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
    files,
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: []
  };

  blogs.push(blog);
  res.status(201).json(blog);
});

// Get all blog posts
app.get('/api/blogs', (req, res) => {
  const blogsWithUserInfo = blogs.map(blog => ({
    ...blog,
    author: userProfiles[blog.userId] || { username: blog.username }
  })).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json(blogsWithUserInfo);
});

// Get user's own blog posts
app.get('/api/blogs/my-posts', authenticateUser, (req, res) => {
  const userBlogs = blogs
    .filter(blog => blog.userId === req.user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json(userBlogs);
});

// Get single blog post
app.get('/api/blogs/:id', (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));

  if (!blog) {
    return res.status(404).json({ error: 'Blog not found' });
  }

  const blogWithUserInfo = {
    ...blog,
    author: userProfiles[blog.userId] || { username: blog.username }
  };

  res.json(blogWithUserInfo);
});

// Update blog post
app.put('/api/blogs/:id', authenticateUser, (req, res) => {
  const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));

  if (blogIndex === -1) {
    return res.status(404).json({ error: 'Blog not found' });
  }

  if (blogs[blogIndex].userId !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const { title, content, tags } = req.body;

  blogs[blogIndex] = {
    ...blogs[blogIndex],
    title: title || blogs[blogIndex].title,
    content: content || blogs[blogIndex].content,
    tags: tags ? tags.split(',').map(tag => tag.trim()) : blogs[blogIndex].tags,
    updatedAt: new Date().toISOString()
  };

  res.json(blogs[blogIndex]);
});

// Delete blog post
app.delete('/api/blogs/:id', authenticateUser, (req, res) => {
  const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));

  if (blogIndex === -1) {
    return res.status(404).json({ error: 'Blog not found' });
  }

  if (blogs[blogIndex].userId !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  blogs.splice(blogIndex, 1);
  res.json({ message: 'Blog deleted successfully' });
});

// Like a blog post
app.post('/api/blogs/:id/like', authenticateUser, (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));

  if (!blog) {
    return res.status(404).json({ error: 'Blog not found' });
  }

  blog.likes += 1;
  res.json({ likes: blog.likes });
});

// Add comment to blog
app.post('/api/blogs/:id/comments', authenticateUser, (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));

  if (!blog) {
    return res.status(404).json({ error: 'Blog not found' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Comment text is required' });
  }

  const comment = {
    id: blog.comments.length + 1,
    userId: req.user.id,
    username: req.user.username,
    text,
    createdAt: new Date().toISOString()
  };

  blog.comments.push(comment);
  res.status(201).json(comment);
});

// Helper endpoint to set up test user (for integration with your existing auth)
app.post('/api/setup-user', (req, res) => {
  const { id, username, email, token } = req.body;

  const existingUser = users.find(u => u.id === id);
  if (!existingUser) {
    users.push({ id, username, email, token });
  }

  res.json({ message: 'User setup complete' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});