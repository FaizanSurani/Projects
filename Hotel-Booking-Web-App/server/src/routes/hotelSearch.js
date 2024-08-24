const router = require("express").Router();
const { hotel } = require("../models/hotelSchema");

router.get("/searchHotel", async (req, res) => {
  try {
    const pageSize = 5;
    const pageNumber = parseInt(
      req.query.page ? req.query.page.toString() : "1"
    );
    const skip = (pageNumber - 1) * pageSize;
    const hotels = await hotel.find().skip(skip).limit(pageSize);
    const total = hotels.countDocuments();

    const response = {
      data: hotels,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
