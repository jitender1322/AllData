const express = require("express");
const port = 1008;

const app = express();
const path = require("path");
const db = require("./config/db");
const cookies = require("cookie-parser");
const passport = require("./middleware/passport");
const session = require("express-session");
const flash = require("connect-flash");
const flashConnect = require("./middleware/flashConnect");

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/public",express.static(path.join(__dirname, "public")));
app.use(cookies());
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
app.use(passport.AuthenticatedUser);
app.use(flash());
app.use(flashConnect.setFlash);

app.use("/", require("./routes/route"));
app.use("/category", require("./routes/category"));
app.use("/subCategory", require("./routes/subCategory"));
app.use("/product", require("./routes/product"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port " + port);
});
