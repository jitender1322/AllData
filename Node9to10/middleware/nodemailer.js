const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rwr2.jitender.ms@gmail.com",
    pass: "utqexnmhkshigaki",
  },
});

module.exports.sendMail = (to,otp)=>{
    let mailOptions = {
      to: to,
      from: "rwr2.jitender.ms@gmail.com",
      subject : "Password Reset OTP",
      text : `Your password reset otp is ${otp}`
    };

    transport.sendMail(mailOptions);
    console.log("email sended successfully !"); 
}