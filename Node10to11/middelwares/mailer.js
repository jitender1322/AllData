const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "jitendersarswat6@gmail.com",
        pass : "wpkyykjdwjnousvf"
    }
})

module.exports.sendOtp = (to,otp)=>{
    let mailoptions = {
      from: "jitendersarswat6@gmail.com",
      to : to,
      subject : "Forgot password OTP",
      text : `Your OTP is ${otp}`
    };

    transport.sendMail(mailoptions)
}