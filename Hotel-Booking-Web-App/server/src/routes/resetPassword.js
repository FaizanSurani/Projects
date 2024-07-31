const router = require("express").Router();
const user = require("../models/userSchema");

router.put("/resetPassword/:token", async (req, res) => {
  try {
    const { password } = req.body;
    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const id = decoded.user.id;
    const userToUpdate = await user.findById(id);
    if (!userToUpdate) {
      return res.status(404).json({ message: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password, salt);

    await user.findByIdAndUpdate(id, { password: secPassword });

    return res.status(200).json({ message: "Password Updated!!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
