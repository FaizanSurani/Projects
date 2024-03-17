const { body, validationResult } = require("express-validator");
const user = require("../models/UserSchema");
const express = require("express");

const router = express.Router();

router.post(
  "/createuser",
  body("name").isLength({ min: 5 }),
  body("password", "Incorrect").isLength({ min: 5 }),
  body("email").isEmail(),
  body("location"),

  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      res.send({ errors: result.array() });
    }

    try {
      await user.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.get("/getuser", (req, res) => {});

module.exports = router;
