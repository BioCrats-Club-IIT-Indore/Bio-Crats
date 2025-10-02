import express from 'express';
import router from 'express';
import  authController from '../controllers/authController.js';
import { authenticateToken, checkUserActive } from '../middleware/auth.js';
import { validateSignup, validateLogin, validateProfileUpdate } from '../middleware/validation.js';

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', validateSignup, authController.signup);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', validateLogin, authController.login);

// @route   GET /api/auth/profile
// @desc    Get current user profile    
// @access  Private
router.get('/profile', authenticateToken, checkUserActive, authController.getProfile);

// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', authenticateToken, checkUserActive, validateProfileUpdate, authController.updateProfile);
const authRoute = router;
export default authRoute;