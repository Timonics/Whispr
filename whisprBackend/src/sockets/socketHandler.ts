import { Server, Socket } from "socket.io";
import { User } from "../db/models/user.model";
import { Message } from "../db/models/message.model";
import { Conversation } from "../db/models/conversations.model";

const onlineUsers = new Map<string, string>();

const SocketHandler = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`User ${socket.id} is connected`);

    socket.on("userConnected", (userId: string) => {
      onlineUsers.set(userId, socket.id);
      console.log(`User ${userId} is online`);

      io.emit("updatedOnlineUsers", Array.from(onlineUsers.keys()));
    });

    socket.on("sendMessage", async ({ text, image, reciever, sender }) => {
      const checkRecipient = await User.findOne({ _id: reciever });
      if (!checkRecipient) {
        console.error({ message: "User not found" });
        return;
      }

      let newMsg = new Message({
        text,
        image,
        sender,
        receiver: checkRecipient._id,
      });

      const conversationExists = await Conversation.findOne({
        participants: {
          $all: [sender, reciever],
        },
      });

      if (!conversationExists) {
        const newConversation = await Conversation.create({
          participants: [sender, reciever],
          messages: [newMsg._id],
        });
        if (!newConversation) {
          console.error({ message: "Conversation creation failed" });
          return;
        }
      } else {
        const updateConversation = await Conversation.updateOne(
          { _id: conversationExists._id },
          { $push: { messages: newMsg._id } },
          { new: true }
        );

        if (!updateConversation) {
          console.error({ message: "Message not added to conversation" });
          return;
        }
      }
      newMsg = await newMsg.save();
      if (!newMsg) {
        console.error({ message: "Message not created" });
        return;
      }

      const recieverSocketId = onlineUsers.get(reciever);
      if (recieverSocketId) {
        io.to(recieverSocketId).emit("recieveMessage", { sender, text, image });
      }
    });

    socket.on("disconnect", () => {
      const userId = [...onlineUsers.entries()].find(
        ([, socketId]) => socketId === socket.id
      )?.[0];

      if (userId) {
        onlineUsers.delete(userId);
        console.log(`User ${userId} is disconnected`);

        io.emit("updatedOnlineUsers", Array.from(onlineUsers.keys()));
      }
    });
  });
};

export { SocketHandler };
