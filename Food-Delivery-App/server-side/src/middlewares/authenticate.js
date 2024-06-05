const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "Unknown String";
const express = require("express");
const router = express.Router();

verifyUser = (req, res, next) => {
  const { token } = req.params;

  if (token) {
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
      if (decoded.role === "admin") {
        next();
      } else {
        return res.json("Not Authorized");
      }
    });
  }
};

router.get("/admin-dashboard", verifyUser, (req, res) => {
  res.json("Success");
});

module.exports = router;
