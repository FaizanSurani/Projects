const router = require("express").Router();
const User = require("../models/UserSchema");
const Books = require("../models/BookSchema");
const { authentication } = require("./auth");

router.post("/addBook", authentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { url, title, author, price, description, language } = req.body;
    const verify = await User.findById(id);

    if (verify.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You do not have access to this functionality!!" });
    }

    await Books.create({
      url: url,
      title: title,
      author: author,
      price: price,
      description: description,
      language: language,
    });
    return res.status(200).json({ message: "Book Added to Database" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.put("/updateBook", authentication, async (req, res) => {
  try {
    const { bookId } = req.headers;
    const { url, title, author, price, description, language } = req.body;
    console.log("UpdateBook Request Headers:", req.headers);
    console.log("UpdateBook Request Body:", req.body);

    await Books.findByIdAndUpdate(
      bookId,
      {
        url,
        title,
        author,
        price,
        description,
        language,
      },
      { new: true }
    );
    return res.status(200).json({ message: "Book Updated to Database" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});

router.delete("/deleteBook", authentication, async (req, res) => {
  try {
    const { bookid } = req.headers;
    await Books.findByIdAndDelete(bookid);
    return res.status(200).json({ message: "Book Deleted from Database" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error!!" });
  }
});
module.exports = router;
