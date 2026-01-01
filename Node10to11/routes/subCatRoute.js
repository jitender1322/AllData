const express = require("express");
const route = express.Router();
const subCatCtl = require("../controller/subCatCtl")
const passport = require("../middelwares/localSt");

route.get("/addSubCat", passport.checkAuth, subCatCtl.addSubCat);
route.post("/addSubCat", passport.checkAuth, subCatCtl.addSubCategory);
route.get("/viewSubCat", passport.checkAuth, subCatCtl.viewSubCat);

module.exports = route;
