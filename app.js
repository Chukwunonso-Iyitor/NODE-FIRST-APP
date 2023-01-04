const http = require("http");
const uc = require('upper-case')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc.upperCase("Hello Node.js"));
    res.end();
}).listen(1000);

