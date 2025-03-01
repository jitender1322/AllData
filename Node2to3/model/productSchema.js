const mongoose = require("mongoose");

const schema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategorie",
    required: true,
  },
});

const firstSchema = mongoose.model("product", schema);

module.exports = firstSchema;
