const catSchema = require("../model/catSchema");
const subCatSchema = require("../model/subCatSchema");

module.exports.addSubCat = async (req, res) => {
  await catSchema.find({}).then((data) => {
    res.render("addSubCategory", { data });
  });
};
module.exports.addSubCategory = async (req, res) => {
  await subCatSchema.create(req.body).then(() => {
    res.redirect("/subCategory/addSubCategory");
  });
};
module.exports.viewSubCategory = async (req, res) => {
  await subCatSchema
    .find({})
    .populate("categoryId")
    .then((data) => {
      res.render("viewSubCategory", { data });
    });
};
