const router = require("express").Router();
const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { validationResult, body } = require("express-validator");

router.post(
  "/sign-up",
  [
    body("username").isLength({ min: 6 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { username, email, password, address } = req.body;
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password, salt);

    try {
      const existingUser = await User.findOne({ username: username });
      if (existingUser) {
        return res.status(400).json({ message: "User Already Exists!!" });
      }

      const existingEmail = await User.findOne({ email: email });
      if (existingEmail) {
        return res.status(400).json({ message: "Email Already in Use!!" });
      }

      await User.create({
        username: username,
        email: email,
        password: secPassword,
        address: address,
      });
      return res.status(200).json({ message: "User Created Succesfully!!" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error!!" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ message: "Trying Logging with correct Credentials!" });
    }
    console.log("Trying Logging with correct Credentials!");

    const validPassword = await bcrypt.compare(password, userData.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Trying Logging with correct Credentials!" });
    }
    console.log("Trying Logging with correct Credentials!");

    const data = {
      user: {
        id: userData._id,
        role: userData.role,
      },
    };

    const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
    return res.status(200).json({
      id: userData._id,
      role: userData.role,
      authToken: authToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
