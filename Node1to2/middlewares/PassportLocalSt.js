const passport = require("passport");
const localSt = require("passport-local").Strategy;

let admin = require("../model/adminSchema");

passport.use(
  "local",
  new localSt({ usernameField: "email" }, async (email, password, done) => {
    let user = await admin.findOne({ email: email });
    // console.log(user);
    if (user) {
      if (user.password == password) {
        console.log("user verified");

        return done(null, user);
      } else {
        return done(null, false);
      }
    } else {
      return done(null, false);
    }
  })
);

passport.serializeUser((user, done) => {
  console.log(user.id);

  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await admin.findById(id);
  console.log(user);

  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

passport.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = passport;
