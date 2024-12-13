const express = require("express");
const port = 9001;
const path = require("path");
const cookieParser = require("cookie-parser");
const passport = require("./middlewares/PassportLocalSt");
const session = require("express-session");
const flash = require("connect-flash");
const flashConnect = require("./middlewares/flashConnect");

const db = require("./config/db");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
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

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(passport.AuthenticatedUser);
app.use(flashConnect.setFlash);

app.use("/", require("./routes/route"));
app.use("/category", require("./routes/category"));
app.use("/subCategory", require("./routes/subCategory"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port" + port);
});
