import { Router } from "express";
import { getUserMessages, newMessage } from "../APIs/message.api";
import { protectedRoute } from "../middleware/auth.middleware";

const router = Router();

router.post("/new-message", protectedRoute, newMessage);
router.get("messages/:userID", protectedRoute, getUserMessages);

export default router;
