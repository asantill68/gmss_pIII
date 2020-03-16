const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 5
    },
    homename: {
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    roomnumber: {
      type: Number,
      required: true
    },
    avg_price: {
      type: Number,
      required: true
    },
    room01: {
      name: String,
      price: Number,
      image: String,
      required: false
    },
    room02: {
      name: String,
      price: Number,
      image: String,
      required: false
    },
    room03: {
      name: String,
      price: Number,
      image: String,
      required: false
    },
    room04: {
      name: String,
      price: Number,
      image: String,
      required: false
    },
    room05: {
      name: String,
      price: Number,
      image: String,
      required: false
    }
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("Home", HomeSchema);
