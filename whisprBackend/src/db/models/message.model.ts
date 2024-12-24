import { Schema, model } from "mongoose";

const messagesSchema = new Schema({
  message: {
    type: String,
  },
  image: {
    type: String,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Messages = model("Messages", messagesSchema);
export { Messages };
