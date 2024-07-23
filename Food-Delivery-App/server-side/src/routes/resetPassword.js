const express = require("express");
const router = express.Router();
const JWT_SECRET_KEY = "Unknown String";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserSchema");

router.put("/resetPassword/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    console.log(decoded);
    const userId = decoded.user.id;

    if (userId) {
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(password, salt);

      const user = await User.findByIdAndUpdate(userId, {
        password: secPassword,
      });

      res.status(200).json({ message: "Password has been updated!" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
});

module.exports = router;
