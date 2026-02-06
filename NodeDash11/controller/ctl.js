const schema = require("../model/schema")

module.exports.login = (req,res)=>{
    res.render("login")
}

module.exports.loginAdmin = async (req,res)=>{
    res.redirect("/dashboard")
}

module.exports.logout = (req,res)=>{
    res.clearCookie("admin")
    res.redirect("/")
}

module.exports.dashboard = (req,res)=>{
    res.render("dashboard") 
}

module.exports.addAdmin = (req,res)=>{
    res.render("addAdmin")
}

module.exports.addAdminData = async (req,res)=>{
    await schema.create(req.body).then((data)=>{
        res.redirect("/addAdmin")
    })
}

module.exports.viewAdmin = async (req,res)=>{
    let data = await schema.find({})
    res.render("viewAdmin",{data})
}