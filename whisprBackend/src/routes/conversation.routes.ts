import { Router } from "express";
import { protectedRoute } from "../middleware/auth.middleware";
import { getConversations } from "../APIs/conversation.api";

const router = Router();

router.get("/convo", protectedRoute, getConversations)

export default router;
