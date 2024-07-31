const router = require("express").Router();
const nodemailer = require("nodemailer");
const user = require("../models/userSchema");
const jwt = require("jsonwebtoken");

router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;

  try {
    const userData = await user.findOne({ email });

    if (!userData) {
      return res.json({ message: "User not found!" });
    }
    const data = {
      user: {
        id: userData.id,
      },
    };

    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // user.resetPasswordToken = token;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
    });

    const mailOptions = {
      from: { address: process.env.USER_MAIL },
      to: email,
      subject: "Reset Password",
      html: `<h1>Reset Your Password</h1>
      <p>Click on the following link to reset your password:</p>
      <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>
      <p>The link will expire in 1 day</p>
      <p>If you didn't request a password reset, please ignore this email.</p>`,
    };

    const sendEmail = async (transporter, mailOptions) => {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Check your Email!!" });
    };

    await sendEmail(transporter, mailOptions);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
