const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connection.on("open", () => {
  console.log("Connected to Database Successfully");
});
mongoose.connection.on("error", (error) => console.log(error));

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined");
    }

    console.log("MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection.db.collection("foodItems");
    const itemsData = await db.find({}).toArray();
    global.foodItems = itemsData;

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const categoryData = await foodCategory.find({}).toArray();
    global.foodCategory = categoryData;

    console.log("Database loaded successfully");
  } catch (error) {
    console.error("Connection Failed", error.message);
  }
};

module.exports = connectDB;
