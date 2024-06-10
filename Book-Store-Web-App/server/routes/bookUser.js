const router = require("express").Router();
const Books = require("../models/BookSchema");

router.get("/getAllBooks", async (req, res) => {
  try {
    const book = await Books.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: book });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.get("/getRecentBooks", async (req, res) => {
  try {
    const book = await Books.find().sort({ createdAt: -1 }).limit(12);
    return res.status(200).json({ data: book });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.get("/bookid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bookDesc = await Books.findById(id);
    return res.status(200).json({ message: "Success!!", data: bookDesc });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

module.exports = router;
