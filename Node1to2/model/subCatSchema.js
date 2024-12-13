const mongoose = require("mongoose");

const subCatSchema = mongoose.Schema({
  subCatName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categorie",
    required: true,
  },
});

const subCategory = mongoose.model("subCategorie", subCatSchema);

module.exports = subCategory;
