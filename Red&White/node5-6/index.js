const express = require("express");
const port = 2002;

const app = express();
const db = require("./config/database");
const crudSchema = require("./model/crudSchema");
const path = require("path")
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const session = require("express-session");
const passport = require("passport");
const localSt = require("./config/passport");
const flashConnect = require("./config/connectFlash")


app.use(express.urlencoded());
app.use(cookieParser())
app.set("view engine", "ejs");

app.use(session({
    name: "demo",
    secret: 'keyboard',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60 }
}))

app.use(flash())

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthUser)
app.use(flashConnect.setFlash)

app.use("/", express.static(path.join(__dirname, "public")))
app.use("/uploads/category/", express.static(path.join(__dirname, "uploads/category")))

app.use("/", require("./routes/index"))
app.use("/category", require("./routes/category"))
app.use("/subCategory", require("./routes/subCategory"))
app.use("/products", require("./routes/products"))


app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server started on port ${port}`);
})