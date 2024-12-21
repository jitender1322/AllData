const express = require("express");
const port = 1008;

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/edit", (req, res) => {
  res.render("edit");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port " + port);
});
