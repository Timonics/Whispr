import mongoose, { Schema } from "mongoose";

const messagesSchema = new Schema({
  text: {
    type: String,
  },
  image: {
    type: String,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messagesSchema);
export { Message };
