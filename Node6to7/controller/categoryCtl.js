const catSchema = require("../model/categorySchema");

module.exports.addCat = (req, res) => {
  res.render("addCat");
};

module.exports.addCategory = async (req, res) => {
  req.body.image = req.file.path;
  await catSchema.create(req.body).then(() => {
    res.redirect("/category/addCat");
  });
};

module.exports.viewCat = async (req, res) => {
  let data = await catSchema.find({});
  data && res.render("viewCat", { data });
};
