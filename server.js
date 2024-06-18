import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";

dotenv.config(); // Load environment variables
const app = express();
const mongodb_URL = process.env.MONGO_URL;

// Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Testing
// app.get("/", (req, res) => {
//   res.send("Hello from Node API!");
// });

mongoose
  .connect(mongodb_URL)
  .then(() => {
    console.log("Connected to the database");
    const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed", error);
  });
