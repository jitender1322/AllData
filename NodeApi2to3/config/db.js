const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Api2to3");

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("Db connected");
})

module.exports = db