const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jitendersarswat6@gmail.com",
    pass: "tdzqwfenlzxwmpue",
  },
});

module.exports.sendOtp = (to, otp) => {
  let mailOptions = {
    from: "jitendersarswat6@gmail.com",
    to: to,
    subject: "OTP for your forget password request",
    text: `your otp is ${otp}`,
  };

  transport.sendMail(mailOptions, (err) => {
    err ? console.log(err) : console.log("Otp sended successfully !");
  });
};
