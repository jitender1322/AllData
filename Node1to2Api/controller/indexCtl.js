let schema = require("../model/Schema");

module.exports.getRecord = async (req, res) => {
  await schema.find({}).then((data) => {
    res.status(200).json({ msg: "This is your data", Record: data });
  });
};

module.exports.addRecord = async (req, res) => {
  await schema.create(req.body).then((data) => {
    res.status(200).json({ msg: "Data added successfully" });
  });
};
