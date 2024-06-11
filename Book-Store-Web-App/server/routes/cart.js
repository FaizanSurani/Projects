const router = require("express").Router();
const User = require("../models/UserSchema");
const { authentication } = require("./auth");

router.put("/addItems", authentication, async (req, res) => {
  try {
    const { bookid, id } = req.headers;

    const userData = await User.findById(id);
    const isBookinCart = userData.cart.includes(bookid);

    if (isBookinCart) {
      return res.status(200).json({ message: "Book is Already in cart!!" });
    }

    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
    return res.status(200).json({ message: "Book Added to the Cart!!" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.put("/removeItems", authentication, async (req, res) => {
  try {
    const { bookid, id } = req.headers;

    const userData = await User.findById(id);
    const isBookinCart = userData.cart.includes(bookid);

    if (isBookinCart) {
      await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });
    }

    return res.status(200).json({ message: "Book Removed from the Cart!!" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.get("/cartItems", authentication, async (req, res) => {
  try {
    const { id } = req.headers;

    const userData = await User.findById(id).populate("cart");
    const cartItems = userData.cart.reverse();

    return res.status(200).json({ data: cartItems });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});
module.exports = router;