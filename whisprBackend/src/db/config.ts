import mongoose from "mongoose";
import { config } from "dotenv";

config();

const URI = process.env.URI || "";

const dataBaseConnect = async () => {
  const connected = await mongoose.connect(URI);
  if (!connected) {
    console.log("Error connecting to MongoDB");
  }
  console.log("Successfully Connected to DB");
};

export default dataBaseConnect
