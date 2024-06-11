const router = require("express").Router();
const Order = require("../models/OrdersSchema");
const Books = require("../models/BookSchema");
const User = require("../models/UserSchema");
const { authentication } = require("./auth");

router.post("/placeOrder", authentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;

    for (const orderData of order) {
      const newOrder = await Order({ user: id, book: orderData._id });
      const orderDb = await newOrder.save();

      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDb._id },
      });
      await User.findByIdAndUpdate(id, {
        $pull: { cart: orderData._id },
      });
    }
    return res.status(200).json({ message: "Order Placed SuccessFully!!" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.get("/orderHistory", authentication, async (req, res) => {
  try {
    const { id } = req.headers;

    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "books" },
    });

    const ordersData = await userData.orders.reverse();
    return res.status(200).json({ data: ordersData });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.get("/allOrders", authentication, async (req, res) => {
  try {
    const usersOrder = await Order.find()
      .populate({ path: "books" })
      .populate({ path: "name" })
      .sort({ createdAt: -1 });

    return res.status(200).json({ data: usersOrder });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.put("/updateStatus/:id", authentication, async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, { status: req.body.status });

    return res
      .status(200)
      .json({ message: "Orders Status Updated Succesfully!!" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

module.exports = router;
