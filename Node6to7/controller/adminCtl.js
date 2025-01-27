const adminSchema = require("../model/firstSchema");
const mailer = require("../middleware/mailer");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.userLogin = async (req, res) => {
  req.flash("success", "Login Successfully");
  res.redirect("/dashboard");
};

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};

module.exports.addData = async (req, res) => {
  let data = await adminSchema.create(req.body);
  res.redirect("/");
};

module.exports.viewAdmin = async (req, res) => {
  let data = await adminSchema.find({});
  data && res.render("viewAdmin", { data });
};

module.exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports.profile = (req, res) => {
  res.render("profile");
};

module.exports.changePass = (req, res) => {
  res.render("changePass");
};

module.exports.checkPass = (req, res) => {
  res.render("checkPass");
};

module.exports.changePassword = async (req, res) => {
  let user = req.user;
  if (req.body.oldPass == user.password) {
    if (req.body.newPass != user.password) {
      if (req.body.newPass == req.body.confirmPass) {
        await adminSchema.findByIdAndUpdate(user.id, {
          password: req.body.newPass,
        });
        res.redirect("/logout");
      } else {
        console.log("new password and confirm password are not same.");
      }
    } else {
      console.log("new password and old password must be different");
    }
  } else {
    console.log("old password is wrong");
  }
};

module.exports.forgotPass = async (req, res) => {
  let admin = await adminSchema.findOne({ email: req.body.email });
  if (!admin) {
    return res.redirect("/");
  }
  let otp = Math.floor(Math.random() * 100000 + 900000);

  mailer.sendOtp(req.body.email, otp);

  req.session.otp = otp;
  req.session.adminData = admin;

  res.render("checkPass");
};

module.exports.checkPassword = async (req, res) => {
  let otp = req.session.otp;
  let adminData = req.session.adminData;
  
  if (req.body.otp == otp) {
    if (req.body.newPass == req.body.confirmPass) {
      let change = await adminSchema.findByIdAndUpdate(adminData._id, {
        password: req.body.newPass,
      });
      change && res.redirect("/");
    } else {
      console.log("password must be same");
      res.redirect("/checkPass");
    }
  } else {
    console.log("otp is wrong");
    res.redirect("/checkPass");
  }
};
