// npm i mongoose

const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1/Node9to10");

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("Db connected");
})

module.exports = db 