import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../db/models/user.model";
import { CustomJwtPayload } from "../interfaces";

export const protectedRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const secret = process.env.JWT_SECRET_KEY || "";
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ message: "Unauthorized - No token found" });
      return;
    }

    const decoded = verify(token, secret) as CustomJwtPayload;
    if (!decoded) {
      res.status(401).json({ message: "Unauthorized - Invalid token" });
      return;
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      res.status(401).json({ message: "Unauthorized - User not found" });
      return;
    }
    req.user = user;
    next();
  } catch (error) {}
};
