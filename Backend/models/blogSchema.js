import mongoose from 'mongoose';

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/biocrats', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};
// Blog Schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  files: [{
    filename: String,
    originalName: String,
    path: String,
    size: Number,
    mimetype: String
  }],
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: String,
    email: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create indexes for better query performance
blogSchema.index({ 'author.id': 1 });
blogSchema.index({ createdAt: -1 });

const User = mongoose.model('User', userSchema);
const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  connectDB,
  User,
  Blog
};

// To use this in server.js:
// 1. Install mongoose: npm install mongoose
// 2. Import at the top: const { connectDB, User, Blog } = require('./database');
// 3. Call connectDB() before app.listen()
// 4. Replace in-memory arrays with database calls:
//    - users.push(user) → await User.create(user)
//    - users.find() → await User.findOne()
//    - blogs.push(blog) → await Blog.create(blog)
//    - blogs → await Blog.find().sort({ createdAt: -1 })