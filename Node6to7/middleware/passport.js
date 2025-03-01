const passport = require("passport");
const localSt = require("passport-local");

let adminSchema = require("../model/firstSchema");

passport.use(
  "local",
  new localSt({ usernameField: "email" }, async (email, password, done) => {
    let user = await adminSchema.findOne({ email: email });
    if (user) {
      if (user.password == password) {
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
  return done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  let user = await adminSchema.findById(userId);
  done(null, user);
});
  
passport.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }else{
    res.redirect("/");
  }
};

passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
