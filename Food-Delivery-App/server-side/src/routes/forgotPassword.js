const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema.js");
const JWT_SECRET_KEY = "Unknown";

router.post("/forgotPassword", async (req, res) => {
  try {
    const user = await User.findOne({ email: email });

    // if (!user) {
    //   console.log("error");
    //   return res.status(404).send({ message: "User not found!" });
    // }

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, JWT_SECRET_KEY, {
      expiresIn: "10m",
    });

    user.resetPasswordToken = token;
    // user.resetPasswordExpires = Date.now() + 600000;

    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: { address: process.env.USER },
      to: email,
      subject: "Reset Password",
      html: `<h1>Reset Your Password</h1>
    <p>Click on the following link to reset your password:</p>
    <a href="http://localhost:5173/forgot-password/${token}">http://localhost:5173/forgot-password/${token}</a>
    <p>The link will expire in 10 minutes.</p>
    <p>If you didn't request a password reset, please ignore this email.</p>`,
    };

    const sendMail = async (transporter, mailOptions) => {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ message: "Email sent!" });
    };

    sendMail(transporter, mailOptions);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
