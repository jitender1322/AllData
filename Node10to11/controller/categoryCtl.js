const schema = require("../model/catSchema")

module.exports.addCat = (req,res)=>{
    res.render("addCat")
}
module.exports.addCategory = async (req, res) => {
  req.body.image = req.file.path
  await schema.create(req.body).then(()=>{
    res.redirect("/category/addCat")
  })
};

module.exports.viewCat  = async (req,res)=>{
  await schema.find({}).then((data)=>{
    res.render("viewCat",{data})
  })
}