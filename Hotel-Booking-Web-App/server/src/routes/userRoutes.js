const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/userSchema");
require("dotenv").config();
const { body, validationResult } = require("express-validator");

router.post(
  "/register",
  [
    body("username").isLength({ min: 6 }),
    body("email").isEmail(),
    body("password").isLength({ min: 4 }),
  ],
  async (req, res) => {
    const { username, email, password, address } = req.body;
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ error: result.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password, salt);

    try {
      const existinguser = await user.findOne({ usernmae: username });
      if (existinguser) {
        return res.status(400).json({ message: "User Already Exists!!" });
      }

      const existingEmail = await user.findOne({ email: email });
      if (existingEmail) {
        return res.status(400).json({ message: "User Already Exists!!" });
      }

      await user.create({
        username,
        email,
        password: secPassword,
        address,
      });

      return res.status(200).json({ message: "User Created Succesfully!!!" });
    } catch (error) {
      return res.status(501).json({ message: error });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await user.findOne({ email: email });
    if (!userData) {
      return res
        .status(400)
        .json({ message: "Try logging in with correct credentials!!" });
    }

    const validPassword = await bcrypt.compare(password, userData.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Try logging in with correct credentials!!" });
    }

    const data = {
      user: {
        id: userData._id,
        role: userData.role,
      },
    };

    const authToken = jwt.sign(data, process.env.JWT_SECRET);

    return res
      .status(200)
      .json({ id: userData._id, role: userData.role, authToken: authToken });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
module.exports = router;
