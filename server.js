import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const mongodb_URL = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.send("Hello from Node API!");
});

mongoose
  .connect(mongodb_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
