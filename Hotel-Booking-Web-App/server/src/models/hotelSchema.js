const { Schema } = require("mongoose");

const hotel = new Schema({
  hotelName: {
    type: String,
    required: true,
    unique: true,
  },
  hotelDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hotelType: {
    type: String,
    enum: [],
  },
  room: {
    type: String,
    required: true,
  },
});
