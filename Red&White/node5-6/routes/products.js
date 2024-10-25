const express = require("express");
const route = express.Router();
const productCtl = require("../controllers/productCtl");
const passport = require("passport")
const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/products")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage: Storage }).single("image");

route.get("/productPage", passport.checkAuth, productCtl.productPage)
route.post("/addProduct", upload, passport.checkAuth, productCtl.addProduct)
route.get("/viewProduct", passport.checkAuth, productCtl.viewProduct)

module.exports = route