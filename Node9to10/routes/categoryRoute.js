const express = require("express");
const route = express.Router();
const ctl = require("../controllers/categoryCtl")
const passport = require("../middleware/localSt")
const multer = require("../middleware/multer")

route.get("/addCat",passport.checkAuth,ctl.addCat)
route.post("/addCat",passport.checkAuth,multer,ctl.addCategory)
route.get("/viewCat", passport.checkAuth, ctl.viewCat);


module.exports = route;