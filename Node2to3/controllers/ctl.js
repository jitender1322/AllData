let adminSchema = require("../model/firstSchema");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.userLogin = async (req, res) => {
  req.flash("success", "Login successfully !");
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
module.exports.addAdminData = async (req, res) => {
  await adminSchema.create(req.body).then((data) => {
    res.redirect("/addAdmin");
  });
};
module.exports.viewAdmin = async (req, res) => {
  await adminSchema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};

module.exports.profile = (req, res) => {
  res.render("profile");
};

module.exports.changePass = (req, res) => {
  res.render("changePass");
};

module.exports.changePassword = async (req, res) => {
  let user = req.user;
  if (user.password == req.body.oldPass) {
    if (req.body.oldPass != req.body.newPass) {
      if (req.body.newPass == req.body.confirmPass) {
        let admin = await adminSchema.findByIdAndUpdate(user.id, {
          password: req.body.newPass,
        });
        admin && res.redirect("/logout");
      } else {
        console.log("new password and confirm password must be same");
      }
    } else {
      console.log("old password and new password must be different");
    }
  } else {
    console.log("Old password is wrong");
  }
};
