const mongoose = require("mongoose");

const schema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  subcategoryId: {
    type: mongoose.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
});

const product = mongoose.model("product", schema);

module.exports = product;
