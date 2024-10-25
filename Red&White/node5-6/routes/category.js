const express = require("express");
const route = express.Router();
const categoryCtl = require("../controllers/categoryCtl")
const passport = require("passport");

const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/category")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage: Storage }).single("image");

route.get("/addCategory", passport.checkAuth, categoryCtl.addCategory);
route.get("/viewCategory", passport.checkAuth, categoryCtl.viewCategory);
route.post("/addCategory", upload, passport.checkAuth, categoryCtl.addCategory2);

module.exports = route;