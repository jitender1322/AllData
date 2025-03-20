const http = require("http");
const port = 1008;

const portHandler = (req,res)=>{
    res.write("<h1>Server started on port 1008</h1>")
    res.end()
}

const server = http.createServer(portHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server started on port : " + port);
  }
});
