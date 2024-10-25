const passport = require("passport");
const localSt = require("passport-local").Strategy

let admin = require("../model/crudSchema");

passport.use("local", new localSt(
    { usernameField: "email" },
    async (email, password, done) => {
        let adminData = await admin.findOne({ email: email });
        if (adminData) {
            if (adminData.password == password) {
                return done(null, adminData);
            } else {
                return done(null, false)
            }
        } else {
            return done(null, false)
        }
    }
))

passport.serializeUser((user, done) => {
    return done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
    let adminData = await admin.findById(id);
    if (adminData) {
        return done(null, adminData)
    } else {
        return done(null, false)
    }
})

passport.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/")
    }
}

passport.setAuthUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user
    }
    next();
}

module.exports = passport