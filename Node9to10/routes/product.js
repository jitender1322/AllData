const express = require("express");
const route = express.Router();
const ctl = require("../controllers/productCtl");
const passport = require("../middleware/localSt");
const multer = require("../middleware/multer");

route.get("/addProduct", passport.checkAuth, ctl.addPro);
route.post("/addProduct", passport.checkAuth, multer, ctl.addProduct);
route.get("/viewProduct", passport.checkAuth, ctl.viewProduct);

module.exports = route;
