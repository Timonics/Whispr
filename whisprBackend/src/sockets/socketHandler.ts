import { Server, Socket } from "socket.io";
import { User } from "../db/models/user.model";
import { Message } from "../db/models/message.model";
import { Conversation } from "../db/models/conversations.model";

const onlineUsers = new Map<string, { socketId: string; user: any }>();

const SocketHandler = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`User ${socket.id} is connected`);

    socket.on("userConnected", async (userId: string) => {
      const user = await User.findById(userId).select("_id name email avatar");

      if (!user) {
        console.error({ message: "User not found" });
        return;
      }

      onlineUsers.set(userId, { socketId: socket.id, user });
      console.log(`User ${userId} is online`);

      await User.findByIdAndUpdate(userId, { isActive: true }, { new: true });

      io.emit(
        "updatedOnlineUsers",
        Array.from(onlineUsers.values()).map((u) => u.user)
      );
    });

    socket.on("fetchConversations", async (userId: string) => {
      const conversations = await Conversation.find({
        participants: { $in: [userId] },
      })
        .populate("last_message")
        .populate("participants", "_id name email avatar")
        .sort({ updated_at: -1 });

      if (!conversations) {
        console.error({ message: "No conversations found" });
        socket.emit("conversationsFetched", []);
      }
      socket.emit("conversationsFetched", conversations);
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
      }).populate("receiverId", "_id name email avatar");

      if (!messages) {
        console.error({ message: "No messages found" });
        socket.emit("messagesFetched", []);
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
      const reciever = onlineUsers.get(receiverId);
      if (reciever) {
        io.to(reciever.socketId).emit("receiveMessage", message);
      }

      const sender = onlineUsers.get(senderId);
      if (sender) {
        io.to(sender.socketId).emit("receiveMessage", message);
      }
    });

    socket.on("disconnect", async () => {
      const userId = [...onlineUsers.entries()].find(
        ([, value]) => value.socketId === socket.id
      )?.[0];

      if (userId) {
        await User.findByIdAndUpdate(
          userId,
          { isActive: false },
          { new: true }
        );
        onlineUsers.delete(userId);
        console.log(`User ${userId} is disconnected`);

        io.emit(
          "updatedOnlineUsers",
          Array.from(onlineUsers.values()).map((entry) => entry.user)
        );
      }
    });
  });
};

export { SocketHandler };
