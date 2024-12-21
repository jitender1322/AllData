const express = require("express");
const route = express.Router();
const ctl = require("../controller/indexCtl");
const auth = require("../middleware/auth");

route.get("/", auth, ctl.allRecord);
route.post("/register", ctl.registerUser);
route.post("/login", ctl.login);

module.exports = route;
