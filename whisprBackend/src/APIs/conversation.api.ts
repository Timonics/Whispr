import { Request, Response } from "express";
import { UserAuthRequest } from "../interfaces";
import { Conversation } from "../db/models/conversations.model";

const getConversations = async (req: Request, res: Response) => {
  try {
    const userId = (req as UserAuthRequest).user;
    const conversations = await Conversation.find({
      participants: {
        $in: [userId],
      },
    }); /* 
      .populate({
        path: "messages",
        populate: { path: "sender receiver" },
      })
      .populate("participants"); */

    if (!conversations || conversations.length === 0) {
      res.status(404).json({ message: "No conversations found" });
      return;
    }
    res.json(conversations);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { getConversations };
