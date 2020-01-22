const http = require("http");
const fs = require("fs");
const url = require("url");

const producthtml = fs.readFileSync(
  `${__dirname}/starter/templates/product.html`,
  "utf-8",
  (err, data) => {
    if (err) {
      console.log("ERROR in reading file...");
    }
  }
);
const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  "utf-8",
  (err, data) => {
    if (err) {
      console.log("ERROR in reading file...");
    }
  }
);
const parsedata = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Hashir Path
  if (pathname === "/hashir") {
    res.end("hashir ");
  }
  // API path
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }
  // Products path
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const id = query.id;
    const singleproduct = parsedata[id];
    console.log(singleproduct);
    const output = producthtml.replace(
      /{%productname%}/g,
      singleproduct.productName
    );
    res.end(output);
  }
  // Else
  else {
    res.end("default");
  }
});

server.listen(4000, "localhost", () => {
  console.log("Listening on port: 4000");
});
