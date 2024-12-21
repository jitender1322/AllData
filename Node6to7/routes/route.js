const express = require("express");
const route = express.Router();
const adminCtl = require("../controller/adminCtl");

route.get("/", adminCtl.login);
route.post("/userLogin", adminCtl.userLogin);
route.get("/dashboard", adminCtl.dashboard);
route.get("/addAdmin", adminCtl.addAdmin);
route.get("/viewAdmin", adminCtl.viewAdmin);
route.post("/addData", adminCtl.addData);
route.get("/logout",adminCtl.logout)
module.exports = route;
