const router = require("express").Router();
const user = require("../models/UserSchema");

router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;

  const userEmail = await user.findOne({ email });
});

module.exports = router;
