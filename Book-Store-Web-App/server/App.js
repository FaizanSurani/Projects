const express = require("express");
require("dotenv").config();
require("./config/DatabaseConfig");

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server Listening to ${process.env.PORT}`);
});
