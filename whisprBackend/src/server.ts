import express from "express";
const app = express();

import morgan from "morgan";
import cookieParser from "cookie-parser";
import dataBaseConnect from "./db/config";

import userRoutes from "./routes/user.routes";
import messageRoutes from "./routes/message.routes";
import conversationRoutes from "./routes/conversation.routes";

import cors from "cors";
import { config } from "dotenv";
config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(morgan("dev"));

const PORT = process.env.PORT;
const api = process.env.API_URL;

app.use(`${api}users`, userRoutes);
app.use(`${api}messages`, messageRoutes);
app.use(`${api}conversations`, conversationRoutes);

dataBaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
