const schema = require("../model/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

module.exports.registerAdmin = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });

  if (admin) {
    return res.status(200).json({ msg: "admin already registered !" });
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);

  await schema.create(req.body).then(() => {
    res.status(200).json({ msg: "admin registered successfully !" });
  });
};

module.exports.logInAdmin = async (req, res) => {
  let admin = await schema.findOne({email:req.body.email});
  if(!admin){
    return res.status(200).json({ msg: "admin not found !" })
  }
  if(await bcrypt.compare(req.body.password,admin.password)){
    let token = jwt.sign({admin},"rnw",{expiresIn : "1h"})
     res.status(200).json({ msg: "admin successfully logged in !" ,token : token});
  }else{
     res.status(200).json({ msg: "password is wrong !" });
  }
};
