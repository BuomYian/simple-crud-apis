import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Parse JSON bodies
const mongodb_URL = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.send("Hello from Node API!");
});

// Creating a product
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a product by id

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
