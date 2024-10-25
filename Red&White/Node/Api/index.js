const express = require("express")
const port = 1008

const app = express();
const db = require("./Config/db")
app.use(express.urlencoded());

app.use("/", require("./Routes/index"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port" + port);
})