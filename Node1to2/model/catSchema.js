const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
  catName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const category = mongoose.model("Categorie", catSchema);

module.exports = category;
