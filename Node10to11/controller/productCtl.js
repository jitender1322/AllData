const subcatSchema = require("../model/subCatSchema")
const productSchema = require("../model/productSchema")

module.exports.addProduct = async(req,res)=>{
    await subcatSchema.find({}).then((data)=>{
        res.render("addProduct",{data})
    })
}

module.exports.addPro = async (req,res)=>{
    await productSchema.create(req.body).then(()=>{
        res.redirect("/products/addProduct")
    })
}

module.exports.viewProduct =async (req,res)=>{
    await productSchema.find({}).populate({
        path : "subcategoryId",
        populate : {
            path : "categoryId"
        }
    }).then((data)=>{
        res.render("viewProducts",{data})
    })
}