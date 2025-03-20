const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.post("/registerAdmin", ctl.registerAdmin);
route.post("/logInAdmin",ctl.logInAdmin)

module.exports = route;
