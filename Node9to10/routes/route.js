const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const passport = require("../middleware/localSt");

route.get("/", ctl.login);
route.post(
  "/login",
  passport.authenticate("localSt", { failureRedirect: "/" }),
  ctl.loginData
);

route.get("/logout",ctl.logout)

route.get("/dashboard" ,ctl.dashboard);

route.get("/addAdmin", ctl.addAdmin);
route.post("/addAdmin",  ctl.addAdminData);

route.get("/viewAdmin",  ctl.viewAdmin);

route.get("/deleteAdmin",  ctl.deleteAdmin);

route.get("/profile",ctl.profile)

route.get("/changePassword",ctl.changePassword)
route.post("/changePass",  ctl.changePass);

route.post("/lostPass",ctl.lostPass)
route.post("/forgetPass",ctl.forgetPass)

module.exports = route;
