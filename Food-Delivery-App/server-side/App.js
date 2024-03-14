const express = require("express");

const app = express();
const PORT = 3000;
const connectDB = require("./Database");

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", require("./src/routes/userRoute"));

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
