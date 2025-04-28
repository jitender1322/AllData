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

route.get("/dashboard",passport.checkAuth ,ctl.dashboard);

route.get("/addAdmin", passport.checkAuth,ctl.addAdmin);
route.post("/addAdmin", passport.checkAuth, ctl.addAdminData);

route.get("/viewAdmin", passport.checkAuth, ctl.viewAdmin);

route.get("/deleteAdmin", passport.checkAuth, ctl.deleteAdmin);

module.exports = route;
