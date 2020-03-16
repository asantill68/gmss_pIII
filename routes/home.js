const express = require("express");
const homeRouter = express.Router();

const Home = require("../models/home");

//CRUD

//read
homeRouter.get("/", (req, res) => {
  Home.find({}, (err, response) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to get homes",
          msgError: true
        }
      });
    else res.status(200).json({ response });
  });
});

//Create
homeRouter.post("/", (req, res) => {
  const home = new Home(req, body);
  home.save((err, document) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to add home",
          msgError: true
        }
      });
    else
      res.status(200).json({
        message: {
          msgBody: "Successfully Added Home",
          msgError: false
        }
      });
  });
});

//Delete
homeRouter.delete("/:id", (req, res) => {
  Home.findByIdAndDelete(req.params.id, err => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to delete users",
          msgError: true
        }
      });
    else
      res.status(200).json({
        message: {
          msgBody: "Successfully Deleted User",
          msgError: false
        }
      });
  });
});

//Update
homeRouter.put("/:id", (req, res) => {
  Home.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    (err, response) => {
      if (err)
        res.status(500).json({
          message: {
            msgBody: "Unable to update users",
            msgError: true
          }
        });
      else
        res.status(200).json({
          message: {
            msgBody: "Successfully Updated User",
            msgError: false
          }
        });
    }
  );
});

module.exports = homeRouter;
