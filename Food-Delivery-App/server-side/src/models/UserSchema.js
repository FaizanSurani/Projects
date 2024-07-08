const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name!"],
    unique: true,
  },
  location: {
    type: String,
    required: [true, "Please Enter Your Location!"],
  },
  email: {
    type: String,
    required: [true, "Please ENter Your Email!"],
    unique: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
