import { Router } from "express";
import {
  createNewUser,
  login,
  updateUser,
  updateUserPassword,
} from "../APIs/user.api";
import { protectedRoute } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", createNewUser);
router.post("/login", login);
router.put("/:userID", /* protectedRoute, */ updateUser);
router.put("/update-password/:userID", /*protectedRoute,*/ updateUserPassword);

export default router;
