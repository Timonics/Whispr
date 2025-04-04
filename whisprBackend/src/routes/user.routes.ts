import { Router } from "express";
import {
  createNewUser,
  login,
  updateUser,
  updateUserPassword,
  logout,
  getProfile,
  getUserProfile,
  deleteAccount,
  checkAuthenticated,
} from "../APIs/user.api";
import { protectedRoute } from "../middleware/auth.middleware";

const router = Router();

router.get("/profile/my-profile", protectedRoute, getProfile);
router.post("/profile/get-user", protectedRoute, getUserProfile);
router.post("/register", createNewUser);
router.post("/login", login);
router.get("/logout", protectedRoute, logout);
router.put("/profile/update-profile", protectedRoute, updateUser);
router.put("/profile/update-password", protectedRoute, updateUserPassword);
router.delete("/profile/delete-account", protectedRoute, deleteAccount);
router.get("/check-auth", protectedRoute, checkAuthenticated);

export default router;
