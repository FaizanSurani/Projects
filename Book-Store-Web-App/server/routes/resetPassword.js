const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/UserSchema");

router.put("/resetPassword/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const id = decoded.id;

    if (!id) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const existingUser = await user.findById(id);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password, salt);

    existingUser.password = secPassword;
    await existingUser.save();

    return res.status(200).json({ message: "Password Updated!!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
