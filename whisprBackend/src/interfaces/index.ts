import { JwtPayload } from "jsonwebtoken";
import { Document } from "mongoose";

export interface UserAttributes extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string | null
}

/* export interface UserAttribute {
  name: string;
  email: string;
  password: string;
  avatar: string;
} */

export interface CustomJwtPayload extends JwtPayload {
  userId: string;
}
