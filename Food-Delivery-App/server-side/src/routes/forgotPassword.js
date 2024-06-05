const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema.js");
const JWT_SECRET_KEY = "Unknown String";

router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ message: "User not found!" });
    }

    const data = {
      user: {
        id: user._id,
      },
    };

    const token = jwt.sign(data, JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    user.resetPasswordToken = token;

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
    <a href="http://localhost:5173/resetPassword/${token}">http://localhost:5173/resetPassword/${token}</a>
    <p>The link will expire in 1 Day</p>
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
