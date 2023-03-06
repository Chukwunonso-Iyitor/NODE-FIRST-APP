const http = require("http");

http.createServer((req, res) => {
  console.log(req.url, req.method);
}).listen(3000);
