const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send("You are not logged in");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) return res.status(403).send("Token not valid");
  });

  next();
};

module.exports = auth;
