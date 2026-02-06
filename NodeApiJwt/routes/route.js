const express = require("express")
const route = express.Router()
const ctl = require("../controllers/ctl")
const auth = require("../middlewares/auth")

route.post("/register",ctl.register)
route.post("/login",ctl.login)

route.get("/profile",auth,ctl.profile)


module.exports = route