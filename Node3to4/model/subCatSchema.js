const mongoose = require("mongoose");

const schema = mongoose.Schema({
  subCatName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categorie",
    required: true,
  },
});

const subCatSchema = mongoose.model("subCategorie", schema);

module.exports = subCatSchema;
