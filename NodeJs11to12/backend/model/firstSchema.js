const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    city : {
        type : String,
        required : true
    },
})

const firstSchema = mongoose.model("Student",Schema)

module.exports = firstSchema