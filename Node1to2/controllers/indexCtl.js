const adminSchema = require("../model/adminSchema");
const mailer = require("../middlewares/mailer");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.loginAdmin = async (req, res) => {
  req.flash("success", "Login Successfully");
  res.redirect("/dashboard");
};
module.exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};
module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};
module.exports.viewAdmin = async (req, res) => {
  let data = await adminSchema.find({});
  data && res.render("viewAdmin", { data });
};
module.exports.addAdminData = async (req, res) => {
  let data = await adminSchema.create(req.body);
  req.flash("success", "data added successfully");
  data && res.redirect("/addAdmin");
};
module.exports.profile = (req, res) => {
  res.render("profile");
};
module.exports.changePass = (req, res) => {
  res.render("changePass");
};
module.exports.checkPass = async (req, res) => {
  let user = req.user;
  if (req.body.oldPass == user.password) {
    if (req.body.newPass !== user.password) {
      if (req.body.newPass == req.body.confirmPass) {
        let passChange = await adminSchema.findByIdAndUpdate(user.id, {
          password: req.body.newPass,
        });
        res.redirect("/logout");
      } else {
        console.log("new password nor matched with confirm password");
      }
    } else {
      console.log("new password and old passwrod must be different");
    }
  } else {
    console.log("Old password is wrong");
  }
};

module.exports.sendOtp = async (req, res) => {
  let user = await adminSchema.findOne({ email: req.body.email });
  if (!user) {
    return res.redirect("/");
  }

  let otp = Math.floor(100000 + Math.random() * 900000);

  mailer.sendOtp(req.body.email, otp);

  req.session.otp = otp;
  req.session.adminData = user;
  res.render("checkPass");
};

module.exports.checkPass2 = async (req, res) => {
  let adminId = req.session.adminData._id;
  let otp = req.session.otp;

  if (req.body.otp == otp) {
    if (req.body.newPass == req.body.confirmPass) {
      let changePassword = await adminSchema.findByIdAndUpdate(adminId, {
        password: req.body.newPass,
      });
      res.redirect("/");
    } else {  
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
};
