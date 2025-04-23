const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl")

route.get("/",ctl.login)
route.post("/login",ctl.loginData)

route.get("/dashboard", ctl.dashboard);

route.get("/addAdmin",ctl.addAdmin)
route.post("/addAdmin",ctl.addAdminData)

route.get("/viewAdmin",ctl.viewAdmin)

route.get("/deleteAdmin",ctl.deleteAdmin)

module.exports = route;
