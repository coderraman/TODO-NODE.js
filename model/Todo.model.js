const mongoose = require("mongoose");

// Define the schema for the todo items
const todoSchema = new mongoose.Schema(
  {
    user_data: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
module.exports = mongoose.model("Todo", todoSchema); // 'Todo' will be the collection name in the database
