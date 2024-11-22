const adminSchema = require("../model/adminSchema");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.loginAdmin = async (req, res) => {
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
  data && res.redirect("/addAdmin");
};
