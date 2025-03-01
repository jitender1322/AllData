const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  city: {
    type: String,
    requried: true,
  },
  gender: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  }
});

const firstSchema = mongoose.model("NodeApi", schema);

module.exports = firstSchema;
