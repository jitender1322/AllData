let schema = require("../model/Schema");
let bcrypt = require("bcryptjs");

module.exports.register = async (req, res) => {
  let user = await schema.findOne({ email: req.body.email });
  if (user) {
    return res.status(200).json({ msg: "email already registered" });
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await schema.create(req.body).then(() => {
    res.status(200).json({ msg: "user registered !" });
  });
};
