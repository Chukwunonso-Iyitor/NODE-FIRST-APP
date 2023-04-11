const fs = require("fs");
// const rs = fs.createReadStream('./Demo.txt')
// rs.on('open', ()=>{
//     console.log('The File is open')
// })
// const events = require("events");
// const e = new events.EventEmitter();

// const eventHandler = () => {
//   console.log("Test scream event");
// };

// e.on("scream", eventHandler);

// e.emit("scream");

fs.unlink("demofile1.html", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
