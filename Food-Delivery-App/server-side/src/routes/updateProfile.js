const User = require("../models/UserSchema");
const { authentication } = require("./auth");

const router = require("express").Router();

router.put("/updateUser", authentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { name, email, location } = req.body;

    await User.findByIdAndUpdate(id, {
      name: name,
      email: email,
      location: location,
    });
    return res.status(200).json({ message: "Profile Updated!!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
