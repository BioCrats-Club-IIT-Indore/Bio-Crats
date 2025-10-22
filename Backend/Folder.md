# Project Folder Structure

```
Backend/
│
├── config/
│   ├── cloudinary.js          # Cloudinary configuration and storage setup
│   └── database.js             # MongoDB connection configuration
│
├── middleware/
│   ├── auth.js                 # Authentication middleware (authenticateToken, authenticateAdmin)
│   └── upload.js               # Multer upload configuration for blogs and events
│
├── models/
│   ├── User.js                 # User model with authentication methods
│   ├── Blog.js                 # Blog model schema
│   └── Event.js                # Event model schema
│
├── routes/
│   ├── User.js                 # User routes (signup, login, profile)
│   ├── Blogs.js                # Blog CRUD routes
│   └── Event.js                # Event CRUD routes
│
├── .env                        # Environment variables
├── server.js                   # Main application entry point
└── package.json                # Project dependencies
```

## Environment Variables Required (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/biocrats
JWT_SECRET=your-secret-key-change-in-production
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## API Endpoints

### User Routes (`/api`)
- `POST /api/signup` - Register new user
- `POST /api/login` - User login
- `GET /api/profile` - Get user profile (protected)

### Blog Routes (`/api/blogs`)
- `POST /api/blogs` - Create blog (protected)
- `GET /api/blogs` - Get all blogs with pagination
- `GET /api/blogs/my-blogs` - Get user's blogs (protected)
- `GET /api/blogs/:id` - Get single blog
- `PUT /api/blogs/:id` - Update blog (protected)
- `DELETE /api/blogs/:id` - Delete blog (protected)

### Event Routes (`/api/events`)
- `GET /api/events` - Get all events (public)
- `GET /api/events/:id` - Get single event (public)
- `POST /api/events` - Create event (admin only)
- `PUT /api/events/:id` - Update event (admin only)
- `DELETE /api/events/:id` - Delete event (admin only)

## Installation Steps

1. Create the folder structure as shown above
2. Copy each file to its respective location
3. Install dependencies:
   ```bash
   npm install express mongoose cors dotenv bcryptjs jsonwebtoken multer cloudinary multer-storage-cloudinary
   ```
4. Create `.env` file with required variables
5. Run the server:
   ```bash
   npm start
   ```
   or for development:
   ```bash
   npm run dev
   ```

## Package.json Scripts

Add these scripts to your package.json:

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```