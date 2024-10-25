const admin = require("../model/crudSchema");
const mailer = require("../config/mailer")

module.exports.login = (req, res) => {
    res.render("login")
}
module.exports.logout = (req, res) => {
    req.session.destroy((err) => {
        err ? console.log(err) : res.redirect("/")
    })
}
module.exports.userLogin = async (req, res) => {
    req.flash("success", "login successfully");
    res.redirect("/dashboard")
}
module.exports.dashboard = async (req, res) => {
    res.render("dashboard")
}
module.exports.profile = async (req, res) => {
    res.render("profile")
}
module.exports.viewAdmin = async (req, res) => {
    let adminData = await admin.find({})
    adminData ? res.render("viewAdmin", { adminData }) : console.log("error found");
}

module.exports.addAdmin = (req, res) => {
    res.render("addAdmin")
}
module.exports.insertData = async (req, res) => {
    let adminData = await admin.create(req.body)
    adminData ? res.redirect("back") : console.log("error found while submitting");
}
module.exports.changePassword = (req, res) => {
    res.render("changePass")
}
module.exports.newPass = async (req, res) => {
    let adminData = await admin.findById(req.user.id);
    if (adminData) {
        if (req.body.oldPass == adminData.password) {
            if (req.body.oldPass != req.body.newPass) {
                if (req.body.newPass == req.body.confirmPass) {
                    let newPassword = await admin.findByIdAndUpdate(adminData.id, { password: req.body.newPass })
                    newPassword ? res.redirect("/logout") : console.log("password is not changed")
                } else {
                    console.log("new password and confirm password are different");
                    res.redirect("/changePassword")
                }
            } else {
                console.log("old password and new password must be different");
                res.redirect("/changePassword")
            }
        } else {
            console.log("old password is wrong");
            res.redirect("/changePassword")
        }
    } else {
        console.log("admin not found");
        res.redirect("/changePassword")
    }
}


module.exports.forgetPass = async (req, res) => {
    let adminData = await admin.findOne({ email: req.body.email });
    if (!adminData) {
        return res.redirect("/");
    }
    let otp = Math.floor(Math.random() * 100000 + 900000);
    mailer.sendOtp(req.body.email, otp);
    req.session.otp = otp;
    req.session.adminId = adminData.id;

    res.render("newPass");
}

module.exports.checkOtp = async (req, res) => {
    let otp = req.session.otp
    let adminId = req.session.adminId

    if (req.body.otp == otp) {
        if (req.body.newPass == req.body.confirmPass) {
            let changeAuth = await admin.findByIdAndUpdate(adminId, { password: req.body.newPass })
            changeAuth && res.redirect("/")
        } else {
            res.redirect("/")
        }
    } else {
        res.redirect("/")
    }
}