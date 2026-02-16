const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    let token = req.header("Authorization");
    
    if (!token) {
        return res.json({ msg: "Token not found" });
    }

    let newToken = token.slice(7, token.length);
    try {
        let decode = jwt.verify(newToken, "rnw");
        req.user = decode.user;
        
    } catch (err) {
        return res.json(err);
    }
    next();
}

module.exports = auth;