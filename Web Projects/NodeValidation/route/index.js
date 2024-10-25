const express = require("express");
const route = express.Router();
const adminCtl = require("../controller/adminCtl")
const multer = require("multer");
const validator = require("../config/validator")

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    }
})

const upload = multer({ storage: Storage }).single("image");

route.post("/addData", upload, validator, adminCtl.addData)

module.exports = route