const express = require("express");
const port = 1008;

const app = express();
const db = require("./config/db");
const cors = require("cors")

app.use(express.urlencoded());
app.use(cors())
app.use(express.json())

app.use("/", require("./route/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port" + port);
});
