let http = require("http");
let url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write("Demo World");
    // res.write(req.url);
    let q = url.parse(req.url, true).query;
    let txt = q.month + " " + q.year;
    res.end(txt);
  })
  .listen(8080);
