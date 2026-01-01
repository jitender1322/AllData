const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
})

const firstSchema = mongoose.model("Student",Schema)

module.exports = firstSchema