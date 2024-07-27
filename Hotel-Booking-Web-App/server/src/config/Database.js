const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOURI}`);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

module.exports = connectDB;
