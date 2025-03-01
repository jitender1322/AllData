const express = require("express");
const port = 1008;

const app = express();
const db = require("./config/db");
const cors = require("cors")

app.use(express.urlencoded());
app.use(express.json())
app.use(cors())

app.use("/", require("./routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server started on port " + port);
});
