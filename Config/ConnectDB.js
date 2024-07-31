const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection has Completed");
  } catch (err) {
    console.log("Connection error", err);
  }
};

module.exports = connectDB;
