import Login from "../models/loginSchema.js";
import express from "express";
const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Login.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.error("Error during user login:", error);
  }
});

export default router;
