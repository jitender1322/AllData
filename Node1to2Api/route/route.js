const express = require("express");
const route = express.Router();
const ctl = require("../controller/indexCtl");
const auth = require("../middleware/auth");

route.get("/viewAllData", auth, ctl.allUser);
route.post("/register", ctl.register);
route.post("/login", ctl.login);

module.exports = route;
