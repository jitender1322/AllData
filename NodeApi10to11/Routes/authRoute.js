const express = require("express")
const route = express.Router()
const ctl = require("../Controllers/authCtl")
const auth = require("../Middlewares/auth")


route.post("/register",ctl.registerUser)
route.post("/login",ctl.loginUser)
route.get("/allUser",auth.checkAuth,ctl.allUser)



module.exports = route