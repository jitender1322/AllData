const express = require("express");
const port = 1008;
const path = require("path");
const fs = require("fs");
const cookies = require("cookie-parser");

const app = express();
const db = require("./config/db");
const passportSt = require("./middleware/passport");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const connectFlash = require("./middleware/flashConnect");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(cookies());
app.use(flash());

app.use(
  session({
    name: "local",
    secret: "local",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60, httpOnly: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(connectFlash.setFlash);

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/route"));
app.use("/category", require("./routes/category"));
app.use("/subCategory", require("./routes/subCategory"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port " + port);
});
