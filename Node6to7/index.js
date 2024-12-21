const express = require("express");
const port = 1008;
const path = require("path");
const fs = require("fs");
const cookies = require("cookie-parser");

const app = express();
const db = require("./config/db");

app.use(express.urlencoded());
app.use(cookies());
app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/route"));
app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port " + port);
});
