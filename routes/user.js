const express = require("express");
const userRouter = express.Router();

const User = require("../models/user");

//CRUD

//read
userRouter.get("/", (req, res) => {
  User.find({}, (err, response) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to get users",
          msgError: true
        }
      });
    else res.status(200).json({ response });
  });
});

//Create
userRouter.post("/", (req, res) => {
  const user = new User(req, body);
  user.save((err, document) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to add users",
          msgError: true
        }
      });
    else
      res.status(200).json({
        message: {
          msgBody: "Successfully Added User",
          msgError: false
        }
      });
  });
});

//Delete
userRouter.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, err => {
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
userRouter.put("/:id", (req, res) => {
  User.findOneAndUpdate(
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

module.exports = userRouter;
