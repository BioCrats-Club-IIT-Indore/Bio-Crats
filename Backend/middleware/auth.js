import jwt from 'jsonwebtoken';
import User from '../models/signupSchema.js';
import e from 'express';
User
// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token is required'
      });
    }

    // Verify token
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      (err, decoded) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
              success: false,
              message: 'Token has expired'
            });
          }

          return res.status(403).json({
            success: false,
            message: 'Invalid token'
          });
        }

        // Attach user info to request
        req.user = decoded;
        next();
      }
    );

  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(500).json({
      success: false,
      message: 'Authentication failed'
    });
  }
};

// Optional: Middleware to check if user is active
const checkUserActive = async (req, res, next) => {
  try {
    const User = require('../models/User');
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    next();
  } catch (error) {
    console.error('Check User Active Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};


// export default {
//   authenticateToken,
//   checkUserActive,

// };
export { authenticateToken, checkUserActive };