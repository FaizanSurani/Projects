const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");

router.post("/userData", async (req, res) => {
  try {
    const user = await User.findById(req.body.user._id);

    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error!");
  }
});

module.exports = router;
