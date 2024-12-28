import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Document, Types } from "mongoose";

export interface UserAttributes extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string | null;
}

export interface UserAuthRequest extends Request {
  user: Types.ObjectId;
}

export interface CustomJwtPayload extends JwtPayload {
  userId: Types.ObjectId;
}
