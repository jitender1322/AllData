const mongoose = require("mongoose");

const schema = mongoose.Schema({
  subCatName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "category",
    required: true,
  },
});

const subCategory = mongoose.model("subCategory", schema);

module.exports = subCategory;
