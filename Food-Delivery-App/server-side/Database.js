const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gofood:xnB6yeibJR8UHpo8@cluster0.wxwrxc2.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connection.on("open", () => {
  console.log("Connected to Database Succesfully");
});
mongoose.connection.on("error", (error) => console.log(error));

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);

    const db = mongoose.connection.db.collection("foodItems");
    const itemsData = await db.find({}).toArray();
    global.foodItems = itemsData;

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const categoryData = await foodCategory.find({}).toArray();
    global.foodCategory = categoryData;
  } catch (error) {
    console.error("Connection Failed", error.message);
  }
};

module.exports = connectDB;
