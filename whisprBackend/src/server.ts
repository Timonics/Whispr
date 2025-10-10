import http from "http";
import express from "express";
const app = express();
import { Server } from "socket.io";

import { SocketHandler } from "./sockets/socketHandler";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dataBaseConnect from "./db/config";

import userRoutes from "./routes/user.routes";
import messageRoutes from "./routes/message.routes";
import conversationRoutes from "./routes/conversation.routes";

import cors from "cors";
import { config } from "dotenv";
config();

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://whispr-chat-front.vercel.app"]
    : ["http://localhost:5173"];

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed by socket.io"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// make sure preflight OPTIONS are handled
app.options("*", cors());

const PORT = process.env.PORT || 5002;
const api = process.env.API_URL || "/api/v1/";

app.use(`${api}users`, userRoutes);
app.use(`${api}messages`, messageRoutes);
app.use(`${api}conversations`, conversationRoutes);

SocketHandler(io);

dataBaseConnect();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
