const express = require("express");
require("dotenv").config();
require("./config/DatabaseConfig");
const app = express();

app.use(express.json());

app.use("/api/v1", require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/userData"));
app.use("/api/v1", require("./routes/updateAddress"));
app.use("/api/v1", require("./routes/bookAdmin"));
app.use("/api/v1", require("./routes/bookUser"));
app.use("/api/v1", require("./routes/favouritesRoute"));
app.use("/api/v1", require("./routes/cart"));

app.listen(process.env.PORT, () => {
  console.log(`Server Listening to ${process.env.PORT}`);
});
