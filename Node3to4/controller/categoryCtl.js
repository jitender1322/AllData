
const catSchema = require("../model/catSchema")

module.exports.addCategory = (req, res) => {
  res.render("addCat");
};
module.exports.addCat =async (req, res) => {
  req.body.image = req.file.path
    await catSchema.create(req.body).then(()=>{
        res.redirect("/category/addCategory")
    })
};


module.exports.viewCategory = async (req,res)=>{
    await catSchema.find({}).then((data)=>{
        res.render("viewCategory",{data})
    })
}