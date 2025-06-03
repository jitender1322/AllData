const express = require("express")
const route  = express.Router()
const ctl = require("../contollers/ctl")
const auth = require("../middlewares/auth")

route.post("/register",ctl.register)
route.post("/logIn",ctl.logIn)
route.get("/allAdmin",auth,ctl.allAdmin)


module.exports  = route