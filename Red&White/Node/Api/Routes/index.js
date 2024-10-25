const express = require("express")
const route = express.Router()

route.use("/admin", require("./admin"))

module.exports = route