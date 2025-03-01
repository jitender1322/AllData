const mongoose = require("mongoose");

const schema = mongoose.Schema({
  catName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const catSchema = mongoose.model("categorie", schema);

module.exports = catSchema;
