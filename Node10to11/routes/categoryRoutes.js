const express = require("express")
const route = express.Router()
const catCtl = require("../controller/categoryCtl")
const passport = require("../middelwares/localSt");
const multer = require("../middelwares/multer")

route.get("/addCat", passport.checkAuth, catCtl.addCat);
route.post("/addCat",multer, passport.checkAuth,catCtl.addCategory);
route.get("/viewCat", passport.checkAuth, catCtl.viewCat);

module.exports=route