const express = require("express")
const route  = express.Router()
const ctl = require("../contollers/ctl")

route.post("/register",ctl.register)
route.post("/logIn",ctl.logIn)


module.exports  = route