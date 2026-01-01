const express = require("express")
const port = 1008

const app = express()
const db = require("./Config/db")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",require("./Routes/route"))
app.use("/auth",require("./Routes/authRoute"))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Sever started on port :" + port);
})