const nodeMailer = require("nodemailer");

const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "jitendersarswat6@gmail.com",
        pass: "fxlxiadyphexcfxw"
    }
})

module.exports.sendOtp = (to, otp) => {
    let mailOption = {
        from: "jitendersarswat6@gmail.com",
        to: to,
        subject: "Your Otp",
        text: `your otp is ${otp}`
    }
    transport.sendMail(mailOption, (err) => {
        err && console.log(err);
    })
}

