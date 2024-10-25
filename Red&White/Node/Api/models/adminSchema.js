const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
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
    city: {
        type: String,
        required: true
    },
    gender: {
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
    createdAt: {
        type: String,
        required: true
    }
})

const admin = mongoose.model("AdminApi", schema);

module.exports = admin;