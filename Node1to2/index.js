const express = require("express");
const port = 9001;
const path = require("path");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const localSt = require("./middlewares/PassportLocalSt");
const session = require("express-session");

const db = require("./config/db");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use(
  session({
    name: "local",
    secret: "local",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 30, httpOnly: true },
  })
);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use("/", require("./routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port" + port);
});
