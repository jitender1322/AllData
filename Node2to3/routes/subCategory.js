const express = require("express");
const route = express.Router();
const passport = require("passport");
const ctl = require("../controllers/subCategoryCtl");

route.get("/addSubCat", passport.checkAuth, ctl.addSubCat);
route.post("/addSubCat", passport.checkAuth, ctl.addSubCategory);
route.get("/viewSubCat", passport.checkAuth, ctl.viewSubCategory);

module.exports = route;
