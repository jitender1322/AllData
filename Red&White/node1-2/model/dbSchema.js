const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    hobby: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

const admin = mongoose.model("FirstSchema", schema);

module.exports = admin;