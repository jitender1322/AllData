const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jitendersarswat6@gmail.com",
    pass: "iglzhatajpvxignt",
  },
});

module.exports.sendOtp = (to, otp) => {
  let mailOptions = {
    from: "jitendersarswat6@gmail.com",
    to: to,
    subject: "Your OTP is Here",
    text: `Your otp is ${otp}`,
  };

  transport.sendMail(mailOptions, (err) => {
    err ? console.log(err) : console.log("otp sended");
  });
};
