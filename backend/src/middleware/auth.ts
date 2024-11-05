import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: ".env.dev" });

interface JwtPayload {
  id: string;
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET!, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token is invalid" });
    req.user = decoded as JwtPayload;
    next();
  });
};

export default authenticateToken;
