const express = require("express");
const port = 9001;
const path = require("path")

const db = require("./config/db")

const app = express();


app.set("view engine","ejs");
app.use(express.urlencoded())
app.use("/",require("./routes/route"))
app.use("/public",express.static(path.join(__dirname,"public")))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port" + port);
})