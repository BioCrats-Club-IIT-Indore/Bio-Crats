// import Login from "../models/loginSchema.js";
// import express from "express";
// const router = express.Router();

// // Login route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await Login.findOne({ email, password });
//     if (user) {
//       res.status(200).json({ message: "Login successful" });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//     console.error("Error during user login:", error);
//   }
// });

// export default router;
// const express = require('express');
import express from 'express';
const router = express.Router();
import { register, login, forgotPassword, resetPassword, verifyEmail, getCurrentUser, logout, updatePassword } from '../controllers/loginAuthController.js';
// const { protect } = require('../middleware/auth');
import { protect } from '../middleware/auth.js';

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);
router.get('/verify-email/:token', verifyEmail);

// Protected routes
router.get('/me', protect, getCurrentUser);
router.post('/logout', protect, logout);
router.put('/update-password', protect, updatePassword);

module.exports = router;