const express = require("express");
const cors = require("cors");
require("./config/Database");
require("dotenv").config();
const { v2 } = require("cloudinary");

v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.use("/api/v1", require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/forgotPassword"));
app.use("/api/v1", require("./routes/userData"));
app.use("/api/v1", require("./routes/resetPassword"));
app.use("/api/v1", require("./routes/hotelRoutes"));
app.use("/api/v1", require("./routes/hotelSearch"));

app.listen(PORT, (req, res) => {
  console.log(`Server running at PORT ${PORT}`);
});
