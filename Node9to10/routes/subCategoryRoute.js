const express = require("express");
const route = express.Router();
const ctl = require("../controllers/subCatCtl");
const passport = require("../middleware/localSt");

route.get("/addSubCat", passport.checkAuth, ctl.addSubCat);
route.post("/addSubCat", passport.checkAuth,ctl.addSubCategory);
route.get("/viewSubCat", passport.checkAuth, ctl.viewSubCat);

module.exports = route;
