import express from "express";
const app = express();

import { config } from "dotenv";
import dataBaseConnect from "./db/config";

config();

const PORT = process.env.PORT;

dataBaseConnect()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
