const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("helmet");
const morgan = require("morgan");

// dotenv.config();

app.get("/", (req, res) => {
  res.send("It's working!");
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
