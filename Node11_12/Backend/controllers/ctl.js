const Schema = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const mailer = require("../middlewares/mailer")

module.exports.register = async (req, res) => {
    let user = await Schema.findOne({ email : req.body.email });

    if(user){
        return res.json({msg: "User already registered"});
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format("DD-MM-YYYY HH:mm:ss");

    await Schema.create(req.body).then((data)=>{
        res.json({msg: "User registered successfully", user: data});
    })
}

module.exports.login = async (req, res) => {
    let user = await Schema.findOne({ email : req.body.email });

    if(!user){
        return res.json({msg: "User not registered", auth: false});
    }

    if(await bcrypt.compare(req.body.password, user.password)){
        let token = jwt.sign({user : user},"rnw",{expiresIn : "1h"});
        res.json({msg: "Login successful",token: token, user: user, auth: true});
    }else{
        res.json({msg: "Invalid password", auth: false});
    }
}

module.exports.profile = async (req, res) => {
    await Schema.findById(req.user._id).then((data)=>{
        res.json({msg: "Profile data fetched", user: data});
    })
}


module.exports.changePass = async(req,res)=>{
   let user = req.user
   if(await bcrypt.compare(req.body.oldPass,user.password)){
    let newPassword = await bcrypt.hash(req.body.newPass,10)
     await Schema.findByIdAndUpdate(req.user._id,{password:newPassword}).then((data)=>{
        res.json({msg: "Password updated"})
     })
   }else{
    res.status(100).json({msg : "Old password is wrong"})
   }
   
}


module.exports.forgetPass = async (req,res)=>{
    let user = await Schema.findOne({email:req.body.email})
    if(!user){
        return res.json({msg : "User not found"})
    }

    let otp = Math.floor(Math.random()*100000+900000)
    mailer.sendOtp(req.body.email,otp)

    req.session.otp = otp
    req.session.userData = user

    res.json({msg : "OTP sended Successfully !"})
}

module.exports.verifyPass = async (req,res)=>{
    console.log(req.body);
    console.log(req.session.otp);
    console.log(req.session.userData); 
}