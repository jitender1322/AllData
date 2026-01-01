const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Api10to11");

const db = mongoose.connection

db.once("open",(err)=>{
    err ? console.log(err) : console.log("Db connected");
})

module.exports=db