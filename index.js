// var data = require("./module");

// data(2, 4, (err, response) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(response);
//     console.log(response.area(3, 4));
//     console.log(response.perimeter(3, 2));
//   }
// });
const http = require("http");
// console.log(http);

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, response) => {
  // console.log(req);
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}`);
});
