const express = require("express")
const route = express.Router()
const ctl = require("../Controllers/ctl")

route.post("/addData",ctl.addData)
route.get("/getData",ctl.getData)
route.delete("/deleteData",ctl.deleteData)
route.put("/updateData",ctl.updateData)


module.exports=route