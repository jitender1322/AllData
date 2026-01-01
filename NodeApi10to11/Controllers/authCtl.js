const authSchema = require("../Models/authSchema")
const bcrypt = require("bcryptjs")
const moment = require("moment")
const jwt = require("jsonwebtoken")


module.exports.registerUser = async (req,res)=>{

    let user = await authSchema.findOne({email : req.body.email})

    if(user){
        return res
          .status(200)
          .json({ msg: "User already registred !"});
    }

    req.body.password = await bcrypt.hash(req.body.password,10)
    req.body.createdAt = moment().format("MMMM Do YYYY, h:mm:ss a");
    await authSchema.create(req.body).then((data)=>{
        res.status(200).json({msg : "User registred successfully !",data :data})
    })
}

module.exports.loginUser = async (req,res)=>{
  
     let user = await authSchema.findOne({ email: req.body.email });

     if (!user) {
       return res.status(200).json({ msg: "User not found !" });
     }

     if(await bcrypt.compare(req.body.password,user.password)){

      let token = jwt.sign({user},"rnw",{expiresIn : "1h"})

        res
          .status(200)
          .json({ msg: "User logged In successfully !",token : token});
     }else{
        res.status(200).json({ msg: "User password is wrong !" });
     }
}


module.exports.allUser = async(req,res)=>{
  await authSchema.findById(req.user.user._id).then((data)=>{
    res.json({data:data})
  })
}