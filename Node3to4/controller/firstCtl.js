const schema = require("../model/firstSchema");
const mailer = require("../middleware/mailer");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.adminLogin = async (req, res) => {
  await schema.findOne({ email: req.body.email }).then((data) => {
    if (data.password == req.body.password) {
      req.flash("success", "Login successfully !");
      res.redirect("/dashboard");
    } else {
      req.flash("error", "Info is not correct!");
      res.redirect("/");
    }
  });
};
module.exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
module.exports.dashboard = async (req, res) => {
  res.render("dashboard");
};
module.exports.addAdmin = async (req, res) => {
  res.render("addAdmin");
};
module.exports.addAdminData = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/addAdmin");
  });
};
module.exports.viewAdmin = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};
module.exports.changePass = (req, res) => {
  res.render("changePass");
};
module.exports.changePassword = async (req, res) => {
  let admin = req.user;

  if (req.body.oldPass == admin.password) {
    if (req.body.newPass != req.body.oldPass) {
      if (req.body.newPass == req.body.confirmPass) {
        await schema
          .findByIdAndUpdate(admin.id, { password: req.body.newPass })
          .then(() => {
            res.redirect("/logout");
          });
      } else {
        res.redirect("/changePass");
      }
    } else {
      res.redirect("/changePass");
    }
  } else {
    res.redirect("/changePass");
  }
};

module.exports.forgetPass = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });
  if (!admin) {
    return res.redirect("/");
  }

  let otp = Math.floor(Math.random() * 100000 + 900000);

  mailer.sendOtp(req.body.email, otp);

  req.session.otp = otp;
  req.session.adminData = admin;

  res.render("forgetOtp");
};

module.exports.forgetPassword = async (req, res) => {
  let adminData = req.session.adminData;
  let otp = req.session.otp;

  if (otp == req.body.otp) {
    if (req.body.newPass == req.body.confirmPass) {
      await schema.findByIdAndUpdate(adminData._id, {
        password: req.body.confirmPass,
      });
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
    }
  };
