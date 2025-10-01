import Signup from "../models/signupSchema.js";
import express from "express";
const router = express.Router();

// SignUp route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new Signup({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Server error" });
    console.error("Error during user registration:", error);
  }
});
export default router;
