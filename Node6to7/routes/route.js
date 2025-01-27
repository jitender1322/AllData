const express = require("express");
const route = express.Router();
const adminCtl = require("../controller/adminCtl");
const passportSt = require("../middleware/passport");
const passport = require("passport");

route.get("/", adminCtl.login);
route.post(
  "/userLogin",
  passport.authenticate("local", { failureRedirect: "/" }),
  adminCtl.userLogin
);
route.get("/dashboard", passport.checkAuth, adminCtl.dashboard);
route.get("/addAdmin", passport.checkAuth, adminCtl.addAdmin);
route.get("/viewAdmin", passport.checkAuth, adminCtl.viewAdmin);
route.post("/addData", passport.checkAuth, adminCtl.addData);
route.get("/profile", passport.checkAuth, adminCtl.profile);
route.get("/logout", adminCtl.logout);
route.get("/changePass", passport.checkAuth, adminCtl.changePass);
route.get("/checkPass", passport.checkAuth, adminCtl.checkPass);
route.post("/changePassword", passport.checkAuth, adminCtl.changePassword);
route.post("/forgotPass", adminCtl.forgotPass);
route.post("/checkPassword", adminCtl.checkPassword);

module.exports = route;
