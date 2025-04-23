const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    }
})

const firstSchma = mongoose.model("AdminPanel",schema);

module.exports = firstSchma;