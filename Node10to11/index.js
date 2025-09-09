const express = require("express")
const port = 1008

const app = express()

let students = [
    {"id" : 1,"name" : "sumit","age":23},
    {"id" : 2,"name" : "rahul","age":21},
    {"id" : 3,"name" : "meet","age":20},
    {"id" : 4,"name" : "heet","age":24},
]

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index",{students})
})

app.post("/addData",(req,res)=>{
    req.body.id = students.length+1
    students.push(req.body)
    res.redirect("/")
})

app.get("/deleteData/:id",(req,res)=>{
    let newData = students.filter((item)=>item.id!=req.params.id)
    students = newData
    res.redirect("/")
})

app.get("/editData",(req,res)=>{
    let singleData = students.find((item)=>item.id ==req.query.id)
    res.render("edit",{singleData})
})

app.post("/updateData",(req,res)=>{
    console.log(req.body);
    let singleData = students.find((item)=>item.id == req.body.id)
    singleData=req.body
    res.redirect("/")
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port : " ,port);
})