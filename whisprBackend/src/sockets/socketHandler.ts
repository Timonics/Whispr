import { Server, Socket } from "socket.io";
import { User } from "../db/models/user.model";
import { Message } from "../db/models/message.model";
import { Conversation } from "../db/models/conversations.model";

const onlineUsers = new Map<string, string>();

const SocketHandler = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`User ${socket.id} is connected`);

    socket.on("userConnected", async (userId: string) => {
      onlineUsers.set(userId, socket.id);
      console.log(`User ${userId} is online`);

      await User.findByIdAndUpdate(userId, { isActive: true }, { new: true });

      io.emit("updatedOnlineUsers", Array.from(onlineUsers.keys()));
    });

    socket.on("fetchMessages", async ({ senderId, receiverId }) => {
      const messages = await Message.find({
        $or: [
          {
            senderId: senderId,
            receiverId: receiverId,
          },
          {
            senderId: receiverId,
            receiverId: senderId,
          },
        ],
      });

      if (!messages) {
        console.error({ message: "No messages found" });
        return;
      }
      
      socket.emit("messagesFetched", messages);
    });

    socket.on("sendMessage", async ({ text, receiverId, senderId, image }) => {
      const checkRecipient = await User.findOne({ _id: receiverId });
      if (!checkRecipient) {
        console.error({ message: "User not found" });
        return;
      }

      let conversations = await Conversation.findOne({
        participants: {
          $all: [senderId, receiverId],
        },
      });

      if (!conversations) {
        conversations = new Conversation({
          participants: [senderId, receiverId],
        });
        await conversations.save();
      }

      let newMessage = {
        conversationId: conversations._id,
        text,
        image,
        senderId,
        receiverId,
      };

      const message = new Message(newMessage);
      await message.save();

      await Conversation.findByIdAndUpdate(
        conversations._id,
        {
          last_message: message._id,
          updated_at: Date.now(),
        },
        { new: true }
      );

      //emitting message to both the sender and reciever
      const recieverSocketId = onlineUsers.get(receiverId);
      if (recieverSocketId) {
        io.to(recieverSocketId).emit("receiveMessage", newMessage);
      }

      const senderSocketId = onlineUsers.get(senderId);
      if (senderSocketId) {
        io.to(senderSocketId).emit("receiveMessage", newMessage);
      }
    });

    socket.on("disconnect", async () => {
      const userId = [...onlineUsers.entries()].find(
        ([, socketId]) => socketId === socket.id
      )?.[0];

      if (userId) {
        await User.findByIdAndUpdate(
          userId,
          { isActive: false },
          { new: true }
        );
        onlineUsers.delete(userId);
        console.log(`User ${userId} is disconnected`);

        io.emit("updatedOnlineUsers", Array.from(onlineUsers.keys()));
      }
    });
  });
};

export { SocketHandler };
