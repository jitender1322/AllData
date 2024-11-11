const express = require("express");
const route = express.Router();
const indexCtl = require("../controllers/indexCtl")

route.get("/", indexCtl.dashboard)
route.get("/addAdmin",indexCtl.addAdmin)

module.exports = route