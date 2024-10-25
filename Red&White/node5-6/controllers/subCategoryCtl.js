let catSchema = require("../model/cateSchema");
let subCateSchema = require("../model/subCatSchema")

module.exports.subCategory = async (req, res) => {
    let data = await catSchema.find({});
    data ? res.render("addSubCategory", { data }) : console.log("something went wrong");
}
module.exports.subCategory2 = async (req, res) => {
    let data = await subCateSchema.create(req.body);
    data ? res.redirect("back") : console.log("something went wrong");
}
module.exports.viewSubCategory = async (req, res) => {
    let data = await subCateSchema.find({});
    data ? res.render("viewSubCategory", { data }) : console.log("something went wrong");
}