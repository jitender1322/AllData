let schema = require("../model/Schema");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

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

module.exports.login = async (req, res) => {
  await schema.findOne({ email: req.body.email }).then((data) => {
    if (!data) {
      res.status(200).json({ msg: "user not found !" });
    } else {
      if (bcrypt.compare(req.body.password, data.password)) {
        let token = jwt.sign({ userData: data }, "rnw", { expiresIn: "1h" });
        res
          .status(200)
          .json({ msg: "user logged successfully!", token: token });
      } else {
        res.status(200).json({ msg: "password is wrong !" });
      }
    }
  });
};

module.exports.allUser = async (req, res) => {
  await schema.find({}).then((data) => {
    res.status(200).json({ data: data });
  });
};
