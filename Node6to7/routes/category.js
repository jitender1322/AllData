const express = require("express");
const route = express.Router();
const ctl = require("../controller/categoryCtl");
const passport = require("passport");

const multer = require("multer");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: Storage }).single("image");

route.get("/addCat", passport.checkAuth, ctl.addCat);
route.post("/addCat", passport.checkAuth, upload, ctl.addCategory);

route.get("/viewCat",passport.checkAuth,ctl.viewCat)

module.exports = route;
