const express = require("express");
const route = express.Router();
const indexCtl = require("../controllers/indexCtl")

route.get("/", indexCtl.dashboard)
route.get("/addAdmin",indexCtl.addAdmin)
route.post("/addAdmin",indexCtl.addAdminData)
route.get("/viewAdmin",indexCtl.viewAdmin)

module.exports = route