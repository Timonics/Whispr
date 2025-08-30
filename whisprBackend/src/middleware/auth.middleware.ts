import { NextFunction, Request, Response } from "express";
import {
  JsonWebTokenError,
  Secret,
  TokenExpiredError,
  verify,
  VerifyErrors,
} from "jsonwebtoken";
import { CustomJwtPayload, UserAuthRequest } from "../interfaces";

const protectedRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret: Secret | undefined = process.env.JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT_SECRET not found");
  }

  if (!req.cookies) {
    res.status(401).json({ message: "Unauthorized - No token" });
    return;
  }

  const token = req.cookies.jwt;
  if (!token) {
    res.status(401).json({ message: "Unauthorized - Token not found" });
    return;
  }

  verify(token, secret, (err: any, decoded: any) => {
    if (err instanceof JsonWebTokenError) {
      res.status(401).json({ message: "Unauthorized - Invalid token" });
      return;
    }
    if (err instanceof TokenExpiredError) {
      res.status(401).json({ message: "Unauthorized - Token expired" });
      return;
    }
    if (err as VerifyErrors) {
      res.status(401).json({ message: "Unauthorized - Token Errors" });
      return;
    }

    const userId = (decoded as CustomJwtPayload).userId;
    (req as UserAuthRequest).user = userId;

    next();
  });
};

export { protectedRoute };