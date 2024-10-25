const mongoose = require("mongoose");

const schema = mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

const admin = mongoose.model("Gallery", schema);

module.exports = admin