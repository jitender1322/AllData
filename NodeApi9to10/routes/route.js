const express = require("express")
const route  = express.Router()
const ctl = require("../contollers/ctl")

route.post("/addData",ctl.addData)

module.exports  = route