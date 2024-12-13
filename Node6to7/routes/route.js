const express = require("express");
const route = express.Router();
const adminCtl = require("../controller/adminCtl");

route.get("/", adminCtl.First);
route.post("/addData", adminCtl.addData);
route.get("/deleteData", adminCtl.delete);
route.get("/editData", adminCtl.edit);
route.post("/updateData", adminCtl.update);
module.exports = route;
