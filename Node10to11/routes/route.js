const express = require("express");
const multer = require("../middelwares/multer");

const route = express.Router();
const controller = require("../controller/control");
const passport = require("../middelwares/localSt")

route.get("/",controller.loginPage)
route.post("/login",passport.authenticate("localSt",{failureRedirect:"/"}),controller.login)


route.get("/dashboard",passport.checkAuth,controller.dashboard)
route.get("/addAdmin", passport.checkAuth, controller.addAdmin);
route.get("/viewAdmin", passport.checkAuth, controller.viewAdmin);
route.post("/addAdmin", passport.checkAuth, controller.addAdminData);
route.get("/logout",controller.logout)

route.get("/changePass",passport.checkAuth,controller.changePass)
route.post("/verifyPass", passport.checkAuth, controller.verifyPass);

route.post("/forgetPass",controller.forgetPass);
route.post("/verifyOtp",controller.verifyOtp)


module.exports = route;
