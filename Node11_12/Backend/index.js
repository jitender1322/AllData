const express = require("express");
const port = 2312;

const app = express();
const db = require("./config/db");
const cors = require("cors");
const cookie = require("cookie-parser")
const session = require("express-session")

app.use(express.urlencoded({ extended: true }));
app.use(cors({origin : "http://localhost:5173",credentials:true}));
app.use(express.json());

app.use(cookie())

app.use(session({
    name:"local",
    secret : "rnw",
    resave : true,
    saveUninitialized : false,
    cookie : {maxAge:100*100*60,httpOnly:true}
}))


app.use("/", require("./routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})