// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
app.use(bodyParser.json());

// Routes
// =============================================================
const userRouter = require("./routes/user");
app.use("/users", userRouter);

const homeRouter = require("./routes/home");
app.use("/homes", homeRouter);

//  Connect mongoose to your database
mongoose.connect(
  "mongodb://localhost:27017/gmss",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
  err => {
    if (err) {
      process.exit(1);
      console.log("Unable to connect to database");
    } else console.log("Successfully connected to the database");
  }
);

const port = process.env.PORT || 5000;

// Starts the server to begin listening
// =============================================================
app.listen(port, () => {
  console.log("App listening on PORT " + port);
});
