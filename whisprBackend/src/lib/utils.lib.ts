import { Response } from "express";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";

config();

export const generateToken = (userId: string, res: Response) => {
  const secretKey = process.env.JWT_SECRET_KEY || "";
  const token = sign({ userId }, secretKey, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: false, //to change in production
  });

  return token;
};
