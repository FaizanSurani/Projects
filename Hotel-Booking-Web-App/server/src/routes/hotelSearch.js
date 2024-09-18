const router = require("express").Router();
const { hotel } = require("../models/hotelSchema");

router.get("/searchHotel", async (req, res) => {
  try {
    const pageSize = 5;
    const pageNumber = parseInt(
      req.query.page ? req.query.page.toString() : "1"
    );
    const skip = (pageNumber - 1) * pageSize;

    const query = {};

    if (req.query.destination) {
      query.destination = req.query.destination;
    }

    if (req.query.checkIn && req.query.checkOut) {
      query.checkIn = new Date(req.query.checkIn);
      query.checkOut = new Date(req.query.checkOut);
    }

    if (req.query.adultCount) {
      query.adultCount = req.query.adultCount;
    }
    if (req.query.childCount) {
      query.childCount = req.query.childCount;
    }

    const hotels = await hotel.find(query).skip(skip).limit(pageSize);
    const total = await hotel.countDocuments(query);

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

module.exports = router;
