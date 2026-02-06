const schema = require("../model/firstschema");
const mailer = require("../middelwares/mailer")

module.exports.loginPage = (req, res) => {
  res.render("login");
};

module.exports.login = async (req, res) => {
  res.redirect("/dashboard");
};

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = (req, res) => {
  res.render("addAdmin");
};

module.exports.addAdminData = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/addAdmin");
  });
};

module.exports.logout=(req,res)=>{
  req.session.destroy()
  res.redirect("/")
}

module.exports.viewAdmin = async (req, res) => {
  await schema.find().then((data) => {
    res.render("viewAdmin", { data });
  });
};


module.exports.changePass = (req,res)=>{
  res.render("changePass")
}

module.exports.verifyPass = async (req, res) => {
  let admin = req.user
  if(admin.password == req.body.oldPass){
    if(req.body.newPass==req.body.confirmPass){
      await schema.findByIdAndUpdate(admin.id,{password : req.body.newPass}).then(()=>{
        res.redirect("/logout")
      })
    }else{
      res.redirect("/changePass")
    }
  }else{
    res.redirect("/logout")
  }
};


module.exports.forgetPass = async (req,res)=>{
  let admin = await schema.findOne({email : req.body.email})
  if(admin){
    let otp = Math.floor(Math.random()*100000+900000)
    mailer.sendOtp(req.body.email,otp)
    req.session.otp = otp
    req.session.adminID = admin.id
    res.render("verifyOtp")
  }else{
    res.redirect("/")
  }
}

module.exports.verifyOtp = async(req,res)=>{
  let adminId = req.session.adminID
  let otp = req.session.otp
  if(req.body.otp == otp){
    if(req.body.newPass==req.body.confirmPass){
      await schema.findByIdAndUpdate(adminId,{password : req.body.newPass}).then(()=>{
        console.log("password updated");
        res.redirect("/")
      })
    }else{
      res.redirect("/")
    }
  }else{
    res.redirect("/")
  }

}