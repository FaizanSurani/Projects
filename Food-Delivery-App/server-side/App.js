const express = require("express");
const app = express();
const PORT = 5001;
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./Database");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

connectDB();

app.use("/", require("./src/routes/userRoute"));
app.use("/", require("./src/routes/displayData"));
app.use("/", require("./src/routes/orderData"));
app.use("/", require("./src/routes/forgotPassword"));
app.use("/", require("./src/routes/resetPassword"));
app.use("/", require("./src/routes/userData"));
app.use("/", require("./src/middlewares/authenticate"));

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
