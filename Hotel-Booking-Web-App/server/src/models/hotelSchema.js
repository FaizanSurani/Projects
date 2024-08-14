const { Schema, default: mongoose } = require("mongoose");

const hotel = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  hotelName: {
    type: String,
    required: true,
    unique: true,
  },
  hotelCity: {
    type: String,
    required: true,
  },
  hotelCountry: {
    type: String,
    required: true,
  },
  hotelDescription: {
    type: String,
    required: true,
  },
  hotelType: {
    type: String,
    required: true,
  },
  adultCount: {
    type: Number,
    required: true,
  },
  childCount: {
    type: Number,
    required: true,
  },
  facilities: [
    {
      type: String,
      required: true,
    },
  ],
  pricePerNight: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  imageURL: [
    {
      type: String,
      required: true,
    },
  ],
  lastUpdated: {
    type: Date,
  },
});

module.exports = mongoose.model("hotel", hotel);
