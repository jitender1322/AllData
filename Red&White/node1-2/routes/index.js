const express = require("express");
const route = express.Router();
const indexCtl = require("../controller/indexCtl")

const upload = require("../middleware/multer")

route.get("/", indexCtl.homePage)
route.post("/insert", upload, indexCtl.addData)
route.get("/deleteData", indexCtl.deleteData)
route.get("/editData", indexCtl.editData)


module.exports = route;