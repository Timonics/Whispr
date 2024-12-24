import { UserAttributes } from "../interfaces";

declare global {
  namespace Express {
    interface Request {
      user: UserAttributes;
    }
  }
}