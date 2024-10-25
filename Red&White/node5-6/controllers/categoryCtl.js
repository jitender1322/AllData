let catSchema = require("../model/cateSchema")

module.exports.addCategory = (req, res) => {
    res.render("addCategory")
}
module.exports.addCategory2 = async (req, res) => {
    req.body.image = req.file.path
    let data = await catSchema.create(req.body)
    data ? res.redirect("back") : console.log("data not added");
}
module.exports.viewCategory = async (req, res) => {
    let data = await catSchema.find({});
    data ? res.render("viewCategory", { data }) : console.log("something went wrong");
}