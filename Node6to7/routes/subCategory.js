const express = require("express");
const route = express.Router();
const ctl = require("../controller/subCatCtl");

route.get("/addSubCat", ctl.addSubCat);
route.post("/addSubCat", ctl.addSubCategory);

route.get("/viewSubCat", ctl.viewSubCat);

module.exports = route;
