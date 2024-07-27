const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  address: {
    type: String,
  },
  favourites: [{ type: mongoose.Types.ObjectId, ref: "hotels" }],
  my_bookings: [{ type: mongoose.Types.ObjectId, ref: "bookings" }],
});
