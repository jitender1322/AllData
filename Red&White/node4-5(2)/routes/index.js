const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    res.render("home")
})
routes.get("/about", (req, res) => {
    console.log("hello");
    res.render("about")
})

module.exports = routes;