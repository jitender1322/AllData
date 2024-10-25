const express = require("express")
const route = express.Router()
const adminCtl = require("../Controllers/adminCtl")
const adminAuth = require("../Config/adminAuth")

const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/admin")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage: Storage }).single("image");

route.post("/addAdmin", upload, adminCtl.addAdmin)
route.post("/logAdmin", adminCtl.logAdmin)
route.get("/viewAdmin", adminAuth, adminCtl.viewAdmin)

module.exports = route