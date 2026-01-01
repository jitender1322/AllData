const express = require("express");
const port = 1008;
const path = require("path")

const app = express();
const db = require("./config/db");
const cookie = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookie())

app.use(
  session({
    name : "local",
    secret: "rnw",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge : 100*100*60, httpOnly:true },
  })
);  

app.use(passport.initialize())
app.use(passport.session())


app.use("/", require("./routes/route"));
app.use("/category", require("./routes/categoryRoutes"));
app.use("/subCategory", require("./routes/subCatRoute"));
app.use("/products", require("./routes/productRoute"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server is started on port : ${port}`);
});
  