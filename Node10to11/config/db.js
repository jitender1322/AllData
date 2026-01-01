const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Crud10to11");

const db = mongoose.connection;

db.once("open", (err) => {
  err ? console.log(err) : console.log(`Db started successfully`);
});

module.exports = db;
