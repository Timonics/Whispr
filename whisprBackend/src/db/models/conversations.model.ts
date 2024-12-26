import { Schema, model } from "mongoose";

const conversationSchema = new Schema({
  participants: [{
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }],
  messages: [{
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true
    }],
  lastMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message",
  },
});

const Conversation = model("Conversation", conversationSchema);
export { Conversation };
