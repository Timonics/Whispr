import express from "express";
const app = express();

import morgan from "morgan";
import cookieParser from "cookie-parser";
import dataBaseConnect from "./db/config";

import userRoutes from "./routes/user.routes";

import { config } from "dotenv";
config();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

const PORT = process.env.PORT;
const api = process.env.API_URL;

app.use(`${api}users`, userRoutes);

dataBaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
