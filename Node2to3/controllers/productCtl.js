const subCatSchema = require("../model/subCatSchema");
const productSchema = require("../model/productSchema");

module.exports.addProduct = async (req, res) => {
  await subCatSchema.find({}).then((data) => {
    res.render("addProduct", { data });
  });
};

module.exports.addProduct2 = async (req, res) => {
  await productSchema.create(req.body).then(() => {
    res.redirect("/product/addProduct");
  });
};

module.exports.viewProduct = async (req, res) => {
  await productSchema
    .find({})
    .populate({
      path: "subCategoryId",
      populate : {
        path : "categoryId"
      }
    })
    .then((data) => {
      res.render("viewProduct",{data})
    });
};
