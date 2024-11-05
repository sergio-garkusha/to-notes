import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Register route
router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login route
router.post("/login", async (req: Request, res: Response) => {
  console.log(process.env.JWT_SECRET);
  const { username, password } = req.body;
  try {
    const user = (await User.findOne({ username })) as IUser;
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});

export default router;
