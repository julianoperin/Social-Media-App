const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");

dotenv.config();

mongoose.connect(
  "process.env.MONGO_URL",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB Connected!!!");
  }
);

app.get("/", (req, res) => {
  res.send("Home Page!");
});

app.get("/users", (req, res) => {
  res.send("Users Page!");
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
