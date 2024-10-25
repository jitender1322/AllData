const mongoose = require("mongoose");

const crud = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

})

const catTbl = mongoose.model("Categorie", crud);

module.exports = catTbl;