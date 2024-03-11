const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gofood:xnB6yeibJR8UHpo8@cluster0.wxwrxc2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.error("Connection Failed", error.message);
  }
};

module.exports = connectDB;

mongoose.connection.on("open", () => {
  console.log("Connected to Databasse Succesfully");
});
mongoose.connection.on("error", (error) => console.log(error));
