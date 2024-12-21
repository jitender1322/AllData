const adminSchema = require("../model/firstSchema");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.userLogin = async (req, res) => {
  let admin = await adminSchema.findOne({ email: req.body.email });
  if (admin) {
    if (admin.password == req.body.password) {
      res.cookie("adminData", admin);
      res.redirect("/dashboard");
    } else {
      console.log("password is worng");
    }
  } else {
    console.log("email not existed");
  }
};

module.exports.dashboard = (req, res) => {
  if (req.cookies.adminData == undefined) {
    res.redirect("/");
  } else {
    res.render("dashboard");
  }
};

module.exports.addAdmin = (req, res) => {
  if (req.cookies.adminData == undefined) {
    res.redirect("/");
  } else {
    res.render("addAdmin");
  }
};

module.exports.addData = async (req, res) => {
  let data = await adminSchema.create(req.body);
  res.redirect("/");
};

module.exports.viewAdmin = async (req, res) => {
  if (req.cookies.adminData == undefined) {
    res.redirect("/");
  } else {
    let data = await adminSchema.find({});
    data && res.render("viewAdmin", { data });
  }
};

module.exports.logout = (req, res) => {
  res.clearCookie("adminData");
  res.redirect("/");
};
