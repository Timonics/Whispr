import { Router } from "express";
import { getUserMessages } from "../APIs/message.api";
import { protectedRoute } from "../middleware/auth.middleware";

const router = Router();

router.get("/:userID", protectedRoute, getUserMessages);

export default router;
