const { body, validationResult } = require("express-validator");
const user = require("../models/UserSchema");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = "Unknown String";
const router = express.Router();

router.post(
  "/createuser",
  [
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect").isLength({ min: 5 }),
    body("email").isEmail(),
  ],

  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await user
        .create({
          name: req.body.name,
          password: secPassword,
          email: req.body.email,
          location: req.body.location,
        })
        .then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [body("password", "Incorrect").isLength({ min: 5 }), body("email").isEmail()],
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    let email = req.body.email;
    try {
      let userdata = await user.findOne({ email });
      if (!userdata) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      const password = await bcrypt.compare(
        req.body.password,
        userdata.password
      );

      if (!password) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      const data = {
        user: {
          id: userdata.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
