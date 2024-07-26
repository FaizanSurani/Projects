const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];

  if (!token) {
    return res.json(401).json({ message: "Token is Required!!" });
  }

  jwt.verify(token, process.env.jwtSecret, (err, user) => {
    if (err) {
      return res.json(403).json({ message: err });
    }
    req.user = user;
    next();
  });
};

module.exports = { authentication };
