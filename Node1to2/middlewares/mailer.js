const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jitendersarswat6@gmail.com",
    pass: "xipjkccrrcpjsgut",
  },
});

module.exports.sendOtp = (to, otp) => {
  let mailoptions = {
    from: "jitendersarswat6@gmail.com",
    to: to,
    sub: "Your Password Reset OTP",
    text: `your OTP is ${otp}`,
  };

  mailer.sendMail(mailoptions, (err) => {
    err ? console.log(err) : console.log("Mail sended successfully");
  });
};
