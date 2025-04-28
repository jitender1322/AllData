let schema = require("../model/firstSchema");

module.exports.login = async (req, res) => {
  res.render("login");
};

module.exports.loginData = async (req, res) => {
  res.redirect("/dashboard");
};

module.exports.dashboard = async (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = async (req, res) => {
  res.render("addAdmin");
};

module.exports.viewAdmin = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};

module.exports.addAdminData = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/addAdmin");
  });
};

module.exports.deleteAdmin = async (req, res) => {
  await schema.findByIdAndDelete(req.query.id).then(() => {
    res.redirect("/viewAdmin");
  });
};
