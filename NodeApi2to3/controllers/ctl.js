const schema = require("../model/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });
  if (admin) {
    return res.status(200).json({ msg: "admin already exsits !" });
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await schema.create(req.body).then(() => {
    res.status(200).json({ msg: "Admin created !" });
  });
};

module.exports.login = async (req, res) => {
  let admin = await schema.findOne({email:req.body.email});
  if (!admin) {
    return res.status(200).json({ msg: "admin not found!" });
  }
  if(await bcrypt.compare(req.body.password,admin.password)){
    let token= jwt.sign({adminData:admin},"rnw",{expiresIn:"1h"});
    res.status(200).json({msg:"admin logged in !", token:token})
  }else{
    res.status(200).json({ msg: "password is wrong !" });
  }
};

module.exports.viewAdmin = async (req,res)=>{
  await schema.find({}).then((data)=>{
    res.status(200).json({data : data})
  })
}
