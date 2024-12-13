const adminSchema = require("../model/firstSchema");

module.exports.First = (req, res) => {
  res.render("index");
};

module.exports.addData = async (req, res) => {
  let data = await adminSchema.create(req.body);
  data && res.redirect("/");
};

module.exports.delete = async (req, res) => {
  let deleteRecord = await adminSchema.findByIdAndDelete(req.query.id);
};
module.exports.edit = async (req, res) => {
  let single = await adminSchema.findById(req.query.id);
  res.render("edit", { single });
};

module.exports.update = async (req, res) => {
  let data = await adminSchema.findByIdAndUpdate(req.body.id, req.body);
};
