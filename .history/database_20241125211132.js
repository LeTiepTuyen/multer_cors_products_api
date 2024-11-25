const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Get the database URI from environment variables
const dbURI = process.env.DB_URI;

// Function to connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

module.exports = connectDB;