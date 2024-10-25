let admin = require("../model/dbSchema")

module.exports.homePage = async (req, res) => {
    let data = await admin.find({})
    data && res.render("index", { data })
}
module.exports.addData = async (req, res) => {
    req.body.image = req.file.path
    let data = await admin.create(req.body)
    data && res.redirect("/")
}
module.exports.deleteData = async (req, res) => {
    console.log(req.query);
}
module.exports.editData = async (req, res) => {
    console.log(req.query);
}