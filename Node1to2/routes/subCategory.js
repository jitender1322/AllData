const express = require("express");
const route = express.Router();
const subCatCtl = require("../controllers/subCategoryCtl");
const passport = require("passport");

route.get("/addSubCat", passport.checkAuth, subCatCtl.addSubCat);
route.post("/addSubCategory", passport.checkAuth, subCatCtl.addSubCategory);
route.get("/viewSubCat", passport.checkAuth, subCatCtl.viewSubCat);

module.exports = route;
