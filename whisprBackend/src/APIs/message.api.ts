import { Message } from "../db/models/message.model";
import { User } from "../db/models/user.model";
import { Request, Response } from "express";
import { UserAuthRequest } from "../interfaces";
import { Conversation } from "../db/models/conversations.model";

const getUserMessages = async (req: Request, res: Response) => {
  try {
    const senderId = (req as UserAuthRequest).user;
    const recipientId = req.params.userID;
    const messages = await Message.find({
      $or: [
        {
          sender: senderId,
          receiver: recipientId,
        },
        {
          sender: recipientId,
          receiver: senderId,
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

const newMessage = async (req: Request, res: Response) => {
  try {
    const userId = (req as UserAuthRequest).user;
    const { text, image, reciever } = req.body;

    const checkRecipient = await User.findOne({ _id: reciever });
    if (!checkRecipient) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    let newMsg = new Message({
      text,
      image,
      sender: userId,
      receiver: checkRecipient._id,
    });

    const conversationExists = await Conversation.findOne({
      participants: {
        $all: [userId, reciever],
      },
    });

    if (!conversationExists) {
      const newConversation = await Conversation.create({
        participants: [userId, reciever],
        messages: [newMsg._id],
      });

      if (!newConversation) {
        res.status(400).json({ message: "Conversation creation failed" });
        return;
      }
    } else {
      const updateConversation = await Conversation.updateOne(
        { _id: conversationExists._id },
        { $push: { messages: newMsg._id } },
        { new: true }
      );

      if (!updateConversation) {
        res.status(400).json({ message: "Message not added to conversation" });
        return;
      }
    }


    newMsg = await newMsg.save();
    if (!newMsg) {
      res.status(404).json({ message: "Message not created" });
      return;
    }
    res.status(201).json(newMsg);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMessage = async (req: Request, res: Response) => {};

export { getUserMessages, newMessage, deleteMessage };
