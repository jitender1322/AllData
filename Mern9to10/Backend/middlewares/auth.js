const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    let token = req.header("Authorization")
    if(!token){
        return res.status(400).json({msg : "token not found"})
    }
    let decode = jwt.verify(token,"rnw")
    req.user = decode;
    next()
}

module.exports = auth