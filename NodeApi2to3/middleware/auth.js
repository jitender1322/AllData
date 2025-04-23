const jwt = require("jsonwebtoken");

const adminAuth = (req,res,next)=>{
    let token = req.header("Authorization");
    if(!token){
        return res.status(200).json({msg : "token not found with req"})
    }
    let newToken = token.slice(7,token.length);
    
    let decode = jwt.verify(newToken,"rnw");
    req.user = decode
    next()
}

module.exports = adminAuth