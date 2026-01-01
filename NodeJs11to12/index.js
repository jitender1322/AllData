const express = require("express")
const port = 1008

const app = express()
const db = require("./config/db")
const schema = require("./model/firstSchema")

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))


app.get("/",async(req,res)=>{
    let data = await schema.find({})
    res.render("index",{data})
})

app.post("/addData",async(req,res)=>{
    await schema.create(req.body).then((data)=>{
        res.redirect("/")
    })
})

app.get("/deleteData",async(req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
})

app.get("/editData",async(req,res)=>{
    let singleData = await schema.findById(req.query.id)
    res.render("edit",{singleData})
})

app.post("/updateData",async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port ", port);
})