// const fs = require("fs");

// setImmediate(() => {
//   console.log("Set Immediate call");
// });

// setTimeout(() => {
//   console.log("Time Out");
// }, 0);

// fs.readFile("./2-how-node-works/starter/test-file.txt", (err, data) => {
//   if (err) console.log("file read error");
//   else console.log("I/O done ");
// });

// console.log("done done dana done");

//////////////////////////
// Events
// const EventEmiter = require("events");
// const http = require("http");
// class Sale extends EventEmiter {
//   constructor() {
//     super();
//   }
// }
// const myEmiter = new Sale();

// myEmiter.on("newSale", stock => {
//   console.log("New Sale Triggered", stock);
// });

// myEmiter.emit("newSale", 9);

// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.end("Request recieved");
// });

// server.on("request", () => {
//   console.log("Another Request recieved");
// });

// server.on("close", () => {
//   console.log("Server Close request");
// });

// server.listen(3000);

///////////////////////
// Stream
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("./2-how-node-works/starter/test-file.txt", (err, data) => {
  //     if (err) console.log("error", err);
  //     else res.end(data);
  //   });

  // Solution 2
  const reading = fs.createReadStream(
    "./2-how-node-works/starter/test-file.txt"
  );
  reading.on("data", chunk => {
    res.write(chunk);
  });
  reading.on("end", () => {
    res.end();
  });
  reading.on("error", () => {
    res.statusCode = 500;
    res.end("Error ");
  });
});

server.listen(3000);
