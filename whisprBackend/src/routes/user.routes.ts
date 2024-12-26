import { Router } from "express";
import {
  createNewUser,
  login,
  updateUser,
  updateUserPassword,
  addFriend,
  getUser,
  logout,
  getProfile,
} from "../APIs/user.api";
import { protectedRoute } from "../middleware/auth.middleware";

const router = Router();

router.get("/profile/my-profile", protectedRoute, getProfile);
router.get("/:userID", protectedRoute, getUser);
router.post("/register", createNewUser);
router.post("/login", login);
router.post("/new-friend", protectedRoute, addFriend);
router.post("/logout", protectedRoute, logout);
router.put("/profile/update-profile", protectedRoute, updateUser);
router.put("/update-password/:userID", protectedRoute, updateUserPassword);

export default router;
