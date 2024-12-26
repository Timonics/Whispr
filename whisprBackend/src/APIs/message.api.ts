import { Messages } from "../db/models/message.model";
import { User } from "../db/models/user.model";
import { Request, Response } from "express";
import { UserAuthRequest } from "../interfaces";

/* const getUserMessages = async (req: Request, res: Response) => {
  try {
    const myId = (req as UserAuthRequest).user;
    const users = await User.find({ _id: { $ne: myId } });
    if (!users) {
      res.status(404).json({ message: "No users found" });
      return;
    }
    const usersId = users.map((user) => user._id);
    const messages = await Messages.find({
      $or: [
        {
          sender: myId,
          receiver: { $in: usersId },
        },
        {
          sender: { $in: usersId },
          receiver: myId,
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
}; */

const getAUserText = async (req: Request, res: Response) => {};

const deleteMessage = async (req: Request, res: Response) => {};

