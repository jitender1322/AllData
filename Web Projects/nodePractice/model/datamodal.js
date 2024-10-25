
//schema//

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    pb_year: {
        type: String,
        required: true,
    },
    pages: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    pb_copies: {
        type: String,
        required: true,
    },

})

const Usermodal = mongoose.model("data", userSchema);

module.exports = Usermodal;