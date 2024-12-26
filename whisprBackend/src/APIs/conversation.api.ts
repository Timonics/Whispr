import { Request, Response } from "express";
import { UserAuthRequest } from "../interfaces";
import { Conversation } from "../db/models/conversations.model";

const getMyConversations = async (req: Request, res: Response) => {
  try {
    const userId = (req as UserAuthRequest).user;
    const conversations = await Conversation.find({
      participants: {
        $in: [userId],
      },
    });
    if (!conversations || conversations.length === 0) {
      res.status(404).json({ message: "No conversations found" });
      return;
    }
    res.status(200).json(conversations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching conversations" });
  }
};
