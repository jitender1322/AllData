const mongoose = require("mongoose");

const schema = mongoose.Schema({
  catName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const firstSchema = mongoose.model("Categorie", schema);

module.exports = firstSchema;
