const express = require("express");
require("dotenv").config();
require("./config/DatabaseConfig");
const app = express();

app.use(express.json());

app.use("/api/v1", require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/userRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server Listening to ${process.env.PORT}`);
});
