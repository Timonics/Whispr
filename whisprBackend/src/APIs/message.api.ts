import { Message } from "../db/models/message.model";
import { Request, Response } from "express";
import { UserAuthRequest } from "../interfaces";

const getUserMessages = async (req: Request, res: Response) => {
  try {
    const senderId = (req as UserAuthRequest).user;
    const recipientId = req.params.userID;

    if (senderId.toString() === recipientId) {
      res
        .status(404)
        .json({ message: "Sender and Recipient can't be the same" });
      return;
    }

    const messages = await Message.find({
      $or: [
        {
          senderId: senderId,
          receiverId: recipientId,
        },
        {
          senderId: recipientId,
          receiverId: senderId,
        },
      ],
    });
    if (!messages) {
      res.status(400).json({ message: "No messages found" });
      return;
    }
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMessage = async (req: Request, res: Response) => {};

export { getUserMessages, deleteMessage };
