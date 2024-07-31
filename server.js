const express = require("express");
const app = express();
require("dotenv").config();
// const port = process.env.PORT || 8002;
port = 8001;
const connectDB = require("./Config/ConnectDB");
const router = require("./router/router");
const cors = require("cors");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", router);

// Function to start the server
const start = () => {
  try {
    app.listen(port, () => {
    connectDB(); // Ensure the DB is connected before starting the server
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

start();
