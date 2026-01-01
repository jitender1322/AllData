const express = require("express");
const route = express.Router();
const productCtl = require("../controller/productCtl")
const passport = require("../middelwares/localSt");

route.get("/addProduct", passport.checkAuth, productCtl.addProduct);
route.post("/addProduct", passport.checkAuth, productCtl.addPro);
route.get("/viewProduct", passport.checkAuth, productCtl.viewProduct);

module.exports = route;
