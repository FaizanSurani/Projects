const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true["Enter Your Name!"],
      unique: true,
    },
    email: {
      type: String,
      required: true["Enter Your Email!"],
      unique: true,
    },
    password: {
      type: String,
      required: true["Enter Your Password!"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    address: {
      type: String,
      required: true["Enter Your Address!"],
    },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
    },
    favourites: [{ type: mongoose.Types.ObjectId, ref: "Books" }],
    cart: [{ type: mongoose.Types.ObjectId, ref: "Books" }],
    orders: [{ type: mongoose.Types.ObjectId, ref: "Orders" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
