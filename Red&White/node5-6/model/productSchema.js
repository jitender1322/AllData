const mongoose = require("mongoose");

const crud = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
        required: true
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subCategorie",
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

const productTbl = mongoose.model("product", crud);

module.exports = productTbl;