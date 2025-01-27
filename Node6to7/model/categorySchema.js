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

const category = mongoose.model("category", schema);

module.exports = category;
