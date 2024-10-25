const adminSchema = require("../model/adminSchema")

module.exports.addData = async (req, res) => {
    req.body.image = req.file.path
    let data = await adminSchema.create(req.body);
    data ? res.status(200).json({ msg: "data added" }) : res.status(400).json({ msg: "data not added" })
}