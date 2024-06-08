const User = require("../models/UserSchema");
const { authentication } = require("./auth");

const router = require("express").Router();

router.put("/updateAddress", authentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { address } = req.body;

    await User.findByIdAndUpdate(id, { address: address });
    return res.status(200).json({ message: "Address Updated!!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
