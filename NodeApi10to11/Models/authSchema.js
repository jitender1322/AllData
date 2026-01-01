const mongoose = require("mongoose")

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const authSchema = mongoose.model("auth",schema)

module.exports = authSchema