const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/JwtAuth")

const db = mongoose.connection


db.once("open", (err) => {
    err ? console.log(err) : console.log("db started");
})

module.exports = db