const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("cloudinary");
const hotel = require("../models/hotelSchema");
const authentication = require("./auth");
const { body } = require("express-validator");

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limit: {
    fileSize: 5 * 1024 * 1024,
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
    body("Facilities").notEmpty().withMessage("Facilities is Required"),
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
        imageURL,
      } = req.body;
      const { userId } = req.headers;

      const uploadImages = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64" + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
      });

      const imageURLs = await Promise.all(uploadImages);
      imageURL = imageURLs;

      await hotel.create(
        userId,
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
        imageURL
      );
      return res.status(201).json({ message: "Hotel Added Succesfully!" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
);

module.exports = router;
