import { NextFunction, Request, Response } from "express";
import {
  JsonWebTokenError,
  TokenExpiredError,
  verify,
  VerifyErrors,
} from "jsonwebtoken";
import { CustomJwtPayload, UserAuthRequest } from "../interfaces";

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

    verify(token, secret, (err: any, decoded: any) => {
      if (err as JsonWebTokenError) {
        res.status(401).json({ message: "Unauthorized - Invalid token" });
        return;
      }
      if (err as TokenExpiredError) {
        res.status(401).json({ message: "Unauthorized - Token expired" });
        return;
      }
      if (err as VerifyErrors) {
        res.status(401).json({ message: "Unauthorized - Token Error" });
        return;
      }

      const user = (decoded as CustomJwtPayload).userId;

      (req as UserAuthRequest).user = user;

      next();
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
