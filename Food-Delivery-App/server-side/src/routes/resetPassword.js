const express = require("express");
const router = express.Router();
const JWT_SECRET_KEY = "Unknown String";
const bcrypt = require("bcryptjs");
const User = require("../models/UserSchema");

router.post("/resetPassword/:token", async (req, res) => {
  const { token } = req.body.token;
  const { password } = req.body.password;
  try {
    const decoded = await jwt.verify(token, JWT_SECRET_KEY);
    const id = decoded.id;

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(password, salt);

    await User.findByIdAndUpdate({ _id: id }, { password: secPassword });
    return res.json({ status: true, message: "Password has been Updated" });
  } catch (error) {
    console.log(error);
    return res.json("Invalid Token");
  }
});

module.exports = router;
