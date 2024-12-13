const express = require("express");
const route = express.Router();
const ctl = require("../controller/indexCtl");

route.get("/", ctl.getRecord);
route.post("/addRecord", ctl.addRecord);

module.exports = route;
