const express = require("express");
const route = express.Router();
const passport = require("passport");
const categoryCtl = require("../controllers/categoryCtl");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage }).single("image");

route.get("/addCat", passport.checkAuth, categoryCtl.addCat);
route.post("/addCategory", passport.checkAuth, upload, categoryCtl.addCategory);
route.get("/viewCat", passport.checkAuth, categoryCtl.viewCat);

module.exports = route;
