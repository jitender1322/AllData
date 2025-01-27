const express = require("express");
const port = 1008;
const path = require("path");
const db = require("./config/db");
const schema = require("./model/firstSchema");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", async(req, res) => {
  await schema.find({})
  .then((data)=>{
    res.render("index", { data });
  })
});

app.post("/addData", async (req, res) => {
  await schema.create(req.body).then(() => {
    res.redirect("/");
  });
});

app.get("/deleteData", (req, res) => {
  let studentData = students.filter((item) => item.id != req.query.id);
  students = studentData;
  res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
  let data = students.find((item) => item.id == req.params.id);
  res.render("edit", { data });
});

app.post("/updateData", (req, res) => {
  students.forEach((item) => {
    if (item.id == req.body.id) {
      item.name = req.body.name;
      item.city = req.body.city;
    } else {
      item;
    }
  });

  res.redirect("/");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port : " + port);
});
