const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const { authentication } = require("./auth");

router.get("/userData", authentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const user = await User.findById(id).select("-password");

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
