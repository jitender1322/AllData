const express = require("express");
const port = 1008;

const app = express();
const path = require("path")

const db = require("./config/db")
const schema = require("./model/firstSchema")
const multer = require("./middleware/multer")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.get("/",async(req,res)=>{
    await schema.find({}).then((data)=>{
    res.render("index",{data});
    })
})


app.post("/addData",multer,async(req,res)=>{
    req.body.image = req.file.path
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })
})

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port : " + port);
});
