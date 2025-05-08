let schema = require("../model/firstSchema");
let mailer = require("../middleware/nodemailer")

module.exports.login = async (req, res) => {
  res.render("login");
};

module.exports.loginData = async (req, res) => {
  req.flash("success", "Login Successfully !");
  res.redirect("/dashboard");
};

module.exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports.dashboard = async (req, res) => {
  res.render("dashboard");
};

module.exports.addAdmin = async (req, res) => {
  res.render("addAdmin");
};

module.exports.viewAdmin = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render("viewAdmin", { data });
  });
};

module.exports.addAdminData = async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/addAdmin");
  });
};

module.exports.deleteAdmin = async (req, res) => {
  await schema.findByIdAndDelete(req.query.id).then(() => {
    res.redirect("/viewAdmin");
  });
};

module.exports.profile = (req, res) => {
  res.render("profile");
};

module.exports.changePassword = (req, res) => {
  res.render("changePassword");
};

module.exports.changePass = async (req, res) => {
  let admin = req.user ;
  if(admin.password == req.body.oldPass){
    if(admin.password != req.body.newPass){
      if(req.body.newPass == req.body.confirmPass){
        await schema.findByIdAndUpdate(admin.id,{password : req.body.confirmPass}).then(()=>{
          res.redirect("/logout")
        })
      }else{
        req.flash("error", "New password and Confirm Password has to be same!");
        res.redirect("/changePassword");
      }
    }else{
       req.flash("error", "New password has to be different!");
       res.redirect("/changePassword");
    }
  }else{
    req.flash("error","Old password is worng!")
    res.redirect("/changePassword")
  }
};

module.exports.lostPass = async (req,res)=>{
  let admin = await schema.findOne({email : req.body.email});
  if(!admin){
    return res.redirect("/")
  }
  let otp = Math.floor(Math.random()*100000 + 900000);
  req.session.otp = otp;
  req.session.adminData = admin;
  mailer.sendMail(req.body.email,otp);
  res.render("forgetPass")
}

module.exports.forgetPass = async (req,res)=>{
  let otp = req.session.otp;
  let admin = req.session.adminData;
  if(req.body.otp == otp){
     if(req.body.newPass == req.body.confirmPass){
        await schema.findByIdAndUpdate(admin.id,{password : req.body.confirmPass}).then(()=>{
          res.redirect("/")
        })
      }else{
        res.redirect("/changePassword");
      }
  }else{
    res.redirect("/")
  }
}
