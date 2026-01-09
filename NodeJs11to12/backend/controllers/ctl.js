const schema = require("../model/firstSchema")

module.exports.addData = async (req,res)=>{
    await schema.create(req.body).then((data)=>{
        res.json({"msg" : "Data added successfully","data":data})
    })
}