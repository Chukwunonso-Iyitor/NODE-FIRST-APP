const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"></input><br /><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (req.url == "/message" && method == "POST") {
      fs.writeFileSync("message.txt", "Lorem ipsum");
      res.statusCode = 302;
      res.setHeader("location", "/");
      return res.end();
    }
    // console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      '<body><h1 style="text-align: center; margin-top: 3rem;">Welcome to Node.js</h1></body>'
    );
    res.write("</html>");
    res.end();
  })
  .listen(3000);
