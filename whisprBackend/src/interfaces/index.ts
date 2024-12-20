import { Document } from "mongoose";

export interface UserAttributes extends Document {
  name: string;
  email: string;
  password: string;
}
