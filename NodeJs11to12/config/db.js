const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/NodeGIM");
// mongoose.connect("mongodb://127.0.0.1/NodeGIM")

const db = mongoose.connection


db.once("open",(err)=>{
    err ? console.log(err) : console.log("Db is connected");
})

module.exports = db