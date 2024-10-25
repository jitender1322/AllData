const express = require("express");
const port = 9001;

const app = express();
const db = require("./config/db")

app.use(express.urlencoded())
app.use("/", require("./route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port " + port);
})