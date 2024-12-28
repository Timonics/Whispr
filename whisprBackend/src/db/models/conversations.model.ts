import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export { Conversation };
