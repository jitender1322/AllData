const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ msg: "token not found" });
  }
  let newToken = token.slice(7, token.length);
  let decode = jwt.verify(newToken, "rnw");
  req.user = decode;
  next();
};

module.exports = userAuth;
