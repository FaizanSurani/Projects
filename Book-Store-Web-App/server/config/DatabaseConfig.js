const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const DBConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOURI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Established Succesfully!");
  } catch (error) {
    console.log(error);
  }
};

DBConnect();

module.exports = DBConnect();
