const express = require("express");
const route = express.Router()
const ctl = require("../controllers/ctl")
const auth = require("../middlewares/jwtAuth")

route.post("/register",ctl.register)
route.post("/login",ctl.login)
route.get("/viewAdmin",auth,ctl.viewAdmin)

module.exports = route