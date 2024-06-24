const user = require("../models/UserSchema");
const { authentication } = require("./auth");

const router = require("express").Router();

router.put("/updateProfile", authentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { username, email, address } = req.body;

    await user.findByIdAndUpdate(id, {
      username: username,
      email: email,
      address: address,
    });
    return res.status(200).json({ message: "Profile Updated!!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
