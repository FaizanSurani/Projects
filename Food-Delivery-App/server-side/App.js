const express = require("express");

const app = express();
const PORT = 3000;
const connectDB = require("./Database");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connectDB();
app.use(express.json());

app.use("/", require("./src/routes/userRoute"));
app.use("/", require("./src/routes/displayData"));

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
