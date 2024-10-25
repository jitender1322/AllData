const express = require("express");
const route = express.Router()
const subCategoryCtl = require("../controllers/subCategoryCtl")
const passport = require("passport")

route.get("/addSubCategory", passport.checkAuth, subCategoryCtl.subCategory)
route.post("/addSubCategory", passport.checkAuth, subCategoryCtl.subCategory2)
route.get("/viewSubCategory", passport.checkAuth, subCategoryCtl.viewSubCategory)

module.exports = route