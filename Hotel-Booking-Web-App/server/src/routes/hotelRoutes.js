const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const hotel = require("../models/hotelSchema");
const authentication = require("./auth");
const { body } = require("express-validator");

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit
  },
});

router.post(
  "/addHotels",
  authentication,
  [
    body("hotelName").notEmpty().withMessage("Name is Required"),
    body("hotelCity").notEmpty().withMessage("City is Required"),
    body("hotelCountry").notEmpty().withMessage("Country is Required"),
    body("hotelDescription").notEmpty().withMessage("Description is Required"),
    body("hotelType").notEmpty().withMessage("Type is Required"),
    body("adultCount").notEmpty().withMessage("AdultCount is Required"),
    body("childCount").notEmpty().withMessage("ChildCount is Required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price is Required"),
    body("facilities").notEmpty().withMessage("Facilities is Required"),
  ],
  upload.array("imageFiles", 6),
  async (req, res) => {
    try {
      const imageFiles = req.files;
      const {
        hotelName,
        hotelType,
        hotelCity,
        hotelCountry,
        hotelDescription,
        facilities,
        rating,
        pricePerNight,
        childCount,
        adultCount,
      } = req.body;
      const { id } = req.headers;

      const uploadImages = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        const dataURI = "data:" + image.mimetype + ";base64," + b64;
        const result = await cloudinary.uploader.upload(dataURI);
        return result.url;
      });

      const imageURLs = await Promise.all(uploadImages);

      await hotel.create({
        userId: id,
        hotelName,
        hotelCity,
        hotelCountry,
        hotelDescription,
        hotelType,
        adultCount,
        childCount,
        rating,
        pricePerNight,
        facilities,
        imageURL: imageURLs,
      });

      return res.status(201).json({ message: "Hotel Added Successfully!" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

router.get("/viewHotels", authentication, async (req, res) => {
  try {
    const data = await hotel.find();

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
