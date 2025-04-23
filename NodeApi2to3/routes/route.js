const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const auth = require("../middleware/auth")

route.post("/registerAdmin", ctl.registerAdmin);
route.post("/logInAdmin",ctl.logInAdmin)
route.get("/viewAdmin", auth,ctl.viewAdmin);

module.exports = route;
