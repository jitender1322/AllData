let catSchema = require("../model/cateSchema");
let subCatSchema = require("../model/subCatSchema");
let productSchema = require("../model/productSchema");

module.exports.productPage = async (req, res) => {
  let catData = await catSchema.find({});
  let subCatData = await subCatSchema.find({});
  res.render("addProduct", { catData, subCatData });
};

module.exports.addProduct = async (req, res) => {
  req.body.image = req.file.path;
  let data = await productSchema.create(req.body);
  data ? res.redirect("back") : console.log("something went wrong");
};

module.exports.viewProduct = async (req, res) => {
  let data = await productSchema.find({}).populate({
    path: "subCategoryId",
    populate: {
      path: "categoryId",
    },
  });
  console.log(JSON.stringify(data));
};
