const catSchema = require("../model/catSchema");

module.exports.addCat = (req, res) => {
  res.render("addCat");
};
module.exports.addCategory = async (req, res) => {
  req.body.image = req.file.path;
  let data = await catSchema.create(req.body);
  data && res.redirect("/category/addCat");
};
module.exports.viewCat = async (req, res) => {
  let data = await catSchema.find({});
  data && res.render("viewCat", { data });
};
