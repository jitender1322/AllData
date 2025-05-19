const express = require("express");
const port = 1008;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server started on port : " + port);
});
