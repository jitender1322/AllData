const mongoose = require("mongoose");

const crud = mongoose.Schema({
    subCategory: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
        required: true
    }
})

const subCatTbl = mongoose.model("subCategorie", crud);

module.exports = subCatTbl;