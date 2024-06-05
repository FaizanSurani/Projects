const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "Unknown String";
const express = require("express");
const router = express.Router();

router.post("/getuser", async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (token) {
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(200).send({
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  }
});

module.exports = router;
