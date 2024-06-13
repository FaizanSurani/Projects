const mongoose = require("mongoose");

const Orders = new mongoose.Schema(
  {
    name: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    books: {
      type: mongoose.Types.ObjectId,
      ref: "Books",
    },
    status: {
      type: String,
      default: "Order Placed",
      enum: ["Order Placed" || "Out For Delivery, Delivered, Cancelled"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", Orders);
