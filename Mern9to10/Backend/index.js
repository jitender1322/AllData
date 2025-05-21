const express = require("express");
const port = 1008;

const app = express();
const cors = require("cors")
const db = require("./config/db")

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port : " + port);
});
