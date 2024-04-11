const express = require("express");
const router = express.Router();
const order = require("../models/OrderSchema");

router.post("/orderData", async (req, res) => {
  let data = Array.isArray(req.body.order_data) ? req.body.order_data : [];
  await data.splice(0, 0, { Order_date: req.body.order_date });

  let eId = await order.findOne({ email: req.body.email });

  if (eId === null) {
    try {
      await order
        .create({
          email: req.body.email,
          order_data: data,
        })
        .then(() => {
          res.json({ success: true });
        });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error!");
    }
  } else {
    try {
      await order
        .findOneAndUpdate(
          { email: req.body.email },
          { $push: { order_data: data } }
        )
        .then(() => {
          res.json({ success: true });
        });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error!", error.message);
    }
  }
});

module.exports = router;
