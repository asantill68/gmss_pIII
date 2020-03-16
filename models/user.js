const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 5
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5
    }
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("User", UserSchema);
