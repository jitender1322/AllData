const express = require("express");
const routes = express.Router();

const adminCtl = require("../controllers/adminCtl");
const passport = require("passport");

routes.get("/", adminCtl.login)
routes.get("/dashboard", passport.checkAuth, adminCtl.dashboard)
routes.get("/viewAdmin", passport.checkAuth, adminCtl.viewAdmin)
routes.get("/addAdmin", passport.checkAuth, adminCtl.addAdmin)
routes.get("/logout", passport.checkAuth, adminCtl.logout)
routes.get("/profile", passport.checkAuth, adminCtl.profile)
routes.get("/changePassword", passport.checkAuth, adminCtl.changePassword)

routes.post("/newPass", passport.checkAuth, adminCtl.newPass)
routes.post("/insertData", adminCtl.insertData)
routes.post("/forgetPass", adminCtl.forgetPass)
routes.post("/userLogin", passport.authenticate("local", { failureRedirect: "/" }), adminCtl.userLogin)
routes.post("/checkOtp", adminCtl.checkOtp)

module.exports = routes