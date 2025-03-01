const express = require("express");
const route = express.Router();
const ctl = require("../controller/firstCtl");
const passport = require("../middleware/passport");

route.get("/", ctl.login);
route.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  ctl.adminLogin
);
route.get("/logout", ctl.logout);
route.get("/dashboard",passport.checkAuth ,ctl.dashboard);
route.get("/addAdmin", passport.checkAuth, ctl.addAdmin);
route.post("/addAdmin", passport.checkAuth, ctl.addAdminData);
route.get("/viewAdmin", passport.checkAuth, ctl.viewAdmin);

route.get("/changePass", passport.checkAuth, ctl.changePass);
route.post("/changePass", passport.checkAuth, ctl.changePassword);

route.post("/forgetPass",ctl.forgetPass)
route.post("/forgotPassword",ctl.forgetPassword)


module.exports = route;
