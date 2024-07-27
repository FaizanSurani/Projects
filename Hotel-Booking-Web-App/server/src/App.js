const express = require("express");
const cors = require("cors");
require("./config/Database");

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.listen(PORT, (req, res) => {
  console.log(`Server running at PORT ${PORT}`);
});
