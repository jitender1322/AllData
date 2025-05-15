const mongoose = require("mongoose")

const schema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategorie",
    required: true,
  },
});

const productSchema = mongoose.model("product",schema)

module.exports = productSchema;