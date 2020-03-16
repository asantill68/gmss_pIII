const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

//  If deployed, use the deployed database.  Otherwise use the local mongoUser database
var db = process.env.MongoDB_URI || "mongodb://localhost/mongoUser";

//  Connect mongoose to your database
mongoose.connect(db, function(error) {
  // Log any error connection with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("Mongoose connection is successful!");
  }
});

app.listen(port, () => {
  console.log("Server is running on port:  " + port);
});
