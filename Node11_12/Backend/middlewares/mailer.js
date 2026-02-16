const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user :"rwr2.jitender.ms@gmail.com",
        pass : "pchpnzmqptmlvohy"
    }
})


module.exports.sendOtp = (email,otp)=>{
    let mailoptions = {
        to : email,
        from : "rwr2.jitender.ms@gmail.com",
        subject : "Password Reset OTP",
        text : `Your password reset otp is ${otp}`
    }

    transport.sendMail(mailoptions)
}