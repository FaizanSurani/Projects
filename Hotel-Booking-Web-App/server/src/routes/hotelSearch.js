const router = require("express").Router();
const hotel = require("../models/hotelSchema");
const { param, validationResult } = require("express-validator");

router.get(
  "/:id",
  [param("id").notEmpty().withMessage("HotelID is required")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id.toString();

    try {
      const hotels = hotel.findById(id);
      return res.json(hotel);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching hotel" });
    }
  }
);

router.get("/searchHotel", async (req, res) => {
  try {
    const query = constructSearchQuery(req.query);

    let sortOptions = {};
    switch (req.query.sortOptions) {
      case "rating":
        sortOptions = { ratings: -1 };
        break;

      case "pricePerNightAsc":
        sortOptions = { pricePerNight: 1 };
        break;

      case "pricePerNightDesc":
        sortOptions = { pricePerNight: -1 };
        break;
    }

    const pageSize = 5;
    const pageNumber = parseInt(
      req.query.page ? req.query.page.toString() : "1"
    );

    const skip = (pageNumber - 1) * pageSize;

    const hotels = await hotel
      .find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(pageSize);

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
    console.error("Error fetching hotels:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

const constructSearchQuery = (queryParams) => {
  const constructQuery = {};

  if (queryParams.destination) {
    constructQuery.$or = [
      { hotelCity: new RegExp(queryParams.destination, "i") },
      { hotelCountry: new RegExp(queryParams.destination, "i") },
    ];
  }

  if (queryParams.adultCount) {
    constructQuery.adultCount = {
      $gte: parseInt(queryParams.adultCount),
    };
  }

  if (queryParams.childCount) {
    constructQuery.childCount = {
      $gte: parseInt(queryParams.childCount),
    };
  }

  if (queryParams.facilities) {
    constructQuery.facilities = {
      $all: Array.isArray(queryParams.facilities)
        ? queryParams.facilities
        : [queryParams.facilities],
    };
  }

  if (queryParams.hotelType) {
    constructQuery.hotelType = {
      $in: Array.isArray(queryParams.hotelType)
        ? queryParams.hotelType
        : [queryParams.hotelType],
    };
  }

  if (queryParams.rating) {
    const ratings = Array.isArray(queryParams.rating)
      ? queryParams.rating.map((star) => parseInt(star))
      : parseInt(queryParams.rating);
    constructQuery.rating = { $in: ratings };
  }

  if (queryParams.pricePerNight && !isNaN(queryParams.pricePerNight)) {
    constructQuery.pricePerNight = {
      $lte: parseInt(queryParams.pricePerNight),
    };
  }

  return constructQuery;
};

module.exports = router;
