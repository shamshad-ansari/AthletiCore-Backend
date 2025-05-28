const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.get("/hello", (req, res) => {
  res.send("Welcome To AthletiCore");
});

//Resolve the connectDB Promise and start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`App is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
