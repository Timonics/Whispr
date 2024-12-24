import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  status: {
    type: String,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);
export { User };
