const mongoose = require("mongoose");

const crud = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

})

const crudTbl = mongoose.model("AdminCrud", crud);

module.exports = crudTbl;