const express = require("express");
const route = express.Router();
const passport = require("../middleware/passport");
const ctl = require("../controller/subCatCtl");

route.get("/addSubCategory", passport.checkAuth, ctl.addSubCat);
route.post("/addSubCat", passport.checkAuth, ctl.addSubCategory);
route.get("/viewSubCategory", passport.checkAuth, ctl.viewSubCategory);

module.exports = route;
