const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
  } catch (error) {
    console.log(error);
  }
};

DBConnect();
