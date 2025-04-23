let schema = require("../model/firstSchema");

module.exports.login = async (req, res) => {
  res.render("login");
};

module.exports.loginData = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });
  if (!admin) {
    return res.redirect("/");
  }
  if (req.body.password == admin.password) {
    res.cookie("admin", admin);
    res.redirect("/dashboard");
  }
};

module.exports.dashboard = async (req, res) => {
  if (req.cookies.admin) {
    res.render("dashboard");
  } else {
    res.redirect("/");
  }
};

module.exports.addAdmin = async (req, res) => {
    if (req.cookies.admin) {
       res.render("addAdmin");
    } else {
      res.redirect("/");
    }
};

module.exports.viewAdmin = async (req, res) => {
   if (req.cookies.admin) {
     await schema.find({}).then((data) => {
       res.render("viewAdmin", { data });
     });
   } else {
     res.redirect("/");
   }
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
