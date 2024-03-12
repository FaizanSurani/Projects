const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gofood:xnB6yeibJR8UHpo8@cluster0.wxwrxc2.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    const fetched_data = await mongoose.connection.db.collection("foodItems");
    fetched_data.find({}).toArray(function (err, data) {
      if (err) console.log(err);
      else console.log(data);
    });
  } catch (error) {
    console.error("Connection Failed", error.message);
  }
};

module.exports = connectDB;

mongoose.connection.on("open", () => {
  console.log("Connected to Databasse Succesfully");
});
mongoose.connection.on("error", (error) => console.log(error));
