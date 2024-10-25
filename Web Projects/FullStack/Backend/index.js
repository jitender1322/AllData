const express = require("express");
const port = 1080;

const app = express();
const db = require("./config/db")
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use("/", require("./routes"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port" + port);
})