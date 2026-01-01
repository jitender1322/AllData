const jwt = require("jsonwebtoken")

module.exports.checkAuth = (req,res,next)=>{
    let token = req.header("Authorization")
    if(!token){
        res.status(200).json({msg : "Token not found"})
    }

    let newToken = token.slice(7,token.length)
    
    let decode = jwt.verify(newToken,"rnw")
    

    req.user = decode

    next()
}