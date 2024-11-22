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

module.exports = route;
