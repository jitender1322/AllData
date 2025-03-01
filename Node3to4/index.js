const express = require("express");
const port = 1008;
const db = require("./config/db");
const path = require("path");
const cookie = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const flashConnect = require("./middleware/flashConnect");

const app = express();

app.set("view engine", "ejs");

app.use(
  session({
    name: "local",
    secret: "rnw",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60 },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(flashConnect.setFlash);

app.use(cookie());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads",express.static(path.join(__dirname, "uploads")));

app.use("/", require("./routes/route"));
app.use("/category", require("./routes/category"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port : " + port);
});
