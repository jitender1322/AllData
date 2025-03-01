const express = require("express");
const route = express.Router();
const passport = require("passport");
const ctl = require("../controllers/productCtl");

route.get("/addProduct", passport.checkAuth, ctl.addProduct);
route.post("/addProduct", passport.checkAuth, ctl.addProduct2);

route.get("/viewProduct",passport.checkAuth,ctl.viewProduct)

module.exports = route;
