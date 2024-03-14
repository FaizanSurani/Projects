const user = require("../models/UserSchema");
const express = require("express");

const router = express.Router();

router.post("/createuser", async (req, res) => {
  try {
    await user.create({
      name: "test",
      password: "test123",
      email: "test@gmail.com",
      location: "Pune",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
