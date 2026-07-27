const express = require("express")
const route = express.Router()
const ctl = require("../controller/ctl")
const passport = require("../middleware/localst")

route.get("/",ctl.login)
route.post("/login",passport.authenticate("localSt",{failureRedirect:"/"}),ctl.loginAdmin)
route.get("/logout",ctl.logout)

route.get("/dashboard",ctl.dashboard)

route.get("/addAdmin",ctl.addAdmin)
route.post("/addAdmin",ctl.addAdminData)

route.get("/viewAdmin",ctl.viewAdmin)

module.exports = route