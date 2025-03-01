const express = require("express");
const route = express.Router();
const passport = require("../middleware/passport");
const ctl = require("../controller/categoryCtl");
const upload = require("../middleware/multer");

route.get("/addCategory", passport.checkAuth, ctl.addCategory);
route.post("/addCat", passport.checkAuth, upload, ctl.addCat);
route.get("/viewCategory", passport.checkAuth,ctl.viewCategory);

module.exports = route;
