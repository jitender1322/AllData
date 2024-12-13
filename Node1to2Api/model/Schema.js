const mongoose = require("mongoose");

const firstSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Schema = mongoose.model("Api", firstSchema);

module.exports = Schema;
