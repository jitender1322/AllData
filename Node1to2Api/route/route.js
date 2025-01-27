const express = require("express");
const route = express.Router();
const ctl = require("../controller/indexCtl");

route.post("/register",ctl.register)

module.exports = route;
