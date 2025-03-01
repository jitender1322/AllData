const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const upload = require("../middleware/multer");
const passport = require("passport");

route.get("/", ctl.login);
route.post(
  "/userLogin",
  passport.authenticate("local", { failureRedirect: "/" }),
  ctl.userLogin
);
route.get("/logout", ctl.logout);
route.get("/dashboard", passport.checkAuth, ctl.dashboard);
route.get("/addAdmin", passport.checkAuth, ctl.addAdmin);
route.post("/addAdmin", passport.checkAuth, ctl.addAdminData);  
route.get("/viewAdmin", passport.checkAuth, ctl.viewAdmin);
route.get("/profile", passport.checkAuth, ctl.profile);

route.get("/changePass",passport.checkAuth,ctl.changePass)
route.post("/changePass",passport.checkAuth,ctl.changePassword)

route.post("/recoverPass",ctl.recoverPass)
route.post("/verifyPass", ctl.verifyPass);

module.exports = route;
