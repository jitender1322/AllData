const catSchema = require("../model/categorySchema");
const subCatSchema = require("../model/subCatSchema");

module.exports.addSubCat = async (req, res) => {
  let category = await catSchema.find({});
  res.render("addSubCat", { category });
};

module.exports.addSubCategory = async (req, res) => {
  await subCatSchema.create(req.body).then(() => {
    res.redirect("/subCategory/addSubCat");
  });
};

module.exports.viewSubCat = async (req, res) => {
  let data = await subCatSchema.find({}).populate("categoryId");
  data && res.render("viewSubCat",{data});
};
