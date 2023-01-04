var http = require("http");
var dt = require('./myfirstmodule')

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World! : " + dt.myDateTime());
  })
  .listen(8080);

// var http = require("http");
// var dt = require("./myfirstmodule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The current time is:" + dt.myDateTime());
//     res.end("Hello World!");
//   })
//   .listen(8080);
