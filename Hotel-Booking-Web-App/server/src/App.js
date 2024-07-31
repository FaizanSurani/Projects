const express = require("express");
const cors = require("cors");
require("./config/Database");

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.use("/api/v1", require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/forgotPassword"));
app.use("/api/v1", require("./routes/userData"));
app.use("/api/v1", require("./routes/resetPassword"));

app.listen(PORT, (req, res) => {
  console.log(`Server running at PORT ${PORT}`);
});
