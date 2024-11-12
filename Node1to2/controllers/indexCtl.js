const adminSchema = require("../model/adminSchema")

module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}
module.exports.addAdmin = (req,res)=>{
    res.render("addAdmin")
}
module.exports.viewAdmin = async (req,res)=>{
    let data = await adminSchema.find({});
    data && res.render("viewAdmin",{data})
}
module.exports.addAdminData = async (req,res)=>{
    let data = await adminSchema.create(req.body);
    data && res.redirect("/addAdmin")
}