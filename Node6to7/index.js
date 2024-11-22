const express = require("express");
const port = 1008;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let students = [
  { id: 1, name: "sumit", subject: "node" },
  { id: 2, name: "rahul", subject: "react" },
  { id: 3, name: "viraj", subject: "express" },
];

app.get("/", (req, res) => {
  res.render("index", { students });
});

app.post("/addData", (req, res) => {
  req.body.id = students.length + 1;
  students.push(req.body);
  res.redirect("/");
});

app.get("/deleteData", (req, res) => {
  let deleteRecord = students.filter((item) => item.id != req.query.id);
  students = deleteRecord;
  res.redirect("/");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port " + port);
});
