const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    let token = req.header("Authorization");
    if (!token) { return res.status(400).json({ msg: "token not found" }) };
    let newToken = token.slice(7, token.length);

    let decode = jwt.verify(newToken, "node");

    req.user = decode;
    next();
}

module.exports = auth