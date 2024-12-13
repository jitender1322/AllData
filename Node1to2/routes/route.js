const express = require("express");
const route = express.Router();
const indexCtl = require("../controllers/indexCtl");
const passport = require("passport");

route.get("/", indexCtl.login);
route.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  indexCtl.loginAdmin
);
route.get("/logout", indexCtl.logout);
route.get("/dashboard", passport.checkAuth, indexCtl.dashboard);
route.get("/addAdmin", passport.checkAuth, indexCtl.addAdmin);
route.post("/addAdmin", passport.checkAuth, indexCtl.addAdminData);
route.get("/viewAdmin", passport.checkAuth, indexCtl.viewAdmin);
route.get("/profile", passport.checkAuth, indexCtl.profile);
route.get("/changePass", passport.checkAuth, indexCtl.changePass);
route.post("/checkPass", passport.checkAuth, indexCtl.checkPass);
route.post("/sendOtp", indexCtl.sendOtp);
route.post("/checkPass2", indexCtl.checkPass2);

module.exports = route;
