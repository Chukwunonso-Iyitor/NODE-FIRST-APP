let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer((req, res) => {
    fs.readFile("demofile1.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);

let add =
  "https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_url";

let q = url.parse(add, true);

fs.writeFile("Demo.txt", `${q.host}\n${q.query.filename}\n${q.path}\n${q.auth}`, (err) => {
  if (err) throw err;
});
// fs.appendFile('mynewfile1.txt', 'Hello Content', (err)=>{
//     if(err) throw err;
//     console.log('Saved!')
// })
// fs.open('mynewfile2.txt', 'w', (err)=>{
//     if (err) throw err;
//     console.log('Saved!')
// })
// fs.unlink("hello.txt", (err) => {
//   if (err) throw err;
//   console.log("Deleted");
// });
// fs.rename("mynewfile1.txt", "Demo.txt", (err) => {
//   if (err) throw err;
//   console.log("Renamed!");
// });
