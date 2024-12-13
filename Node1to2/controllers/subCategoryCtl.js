let catSchema = require("../model/catSchema");
let subCatSchema = require("../model/subCatSchema");

module.exports.addSubCat = async (req, res) => {
  let data = await catSchema.find({});
  data && res.render("addSubCat", { data });
};

module.exports.addSubCategory = async (req, res) => {
  let data = await subCatSchema.create(req.body);
  data && res.redirect("/subCategory/addSubCat");
};
module.exports.viewSubCat = async (req, res) => {
  // let data = await subCatSchema.find({}).populate("categoryId");
  let data = await subCatSchema.find({}).populate({
    path: "categoryId".populate({
      path: "".populate({
        path: "",
      }),
    }),
  });
  data && res.render("viewSubCat", { data });
};
