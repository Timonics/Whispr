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

const allowedOrigins = [
  "http://localhost:5173",
  "https://mick-whispr-frontend-myapp.loca.lt",
];

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://mick-whispr-frontend-myapp.loca.lt",
    ],
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
      if (!origin) return callback(null, true); // allow non-browser tools like Postman
      if (allowedOrigins.includes(origin)) {
        return callback(null, origin); // ✅ send exact origin
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

const PORT = process.env.PORT;
const api = process.env.API_URL;

app.use(`${api}users`, userRoutes);
app.use(`${api}messages`, messageRoutes);
app.use(`${api}conversations`, conversationRoutes);

SocketHandler(io);

dataBaseConnect();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
