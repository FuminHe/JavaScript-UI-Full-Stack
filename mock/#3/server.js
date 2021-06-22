let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  const url = req.url; // localhost:3000/1.jpg

  fs.readFile(__dirname + url, (err, img) => {
    if (err) {
      res.writeHead(400, { "Context-type": "text/HTML" });
      res.end("<h1>Can't find the image</h1>");
    } else {
      res.writeHead(200, { "Context-type": "image/jpg" });
      res.end(img);
    }
  });
  // } else {
  //   res.writeHead(400, { "Context-type": "text/HTML" });
  //   res.end("<h1>Can't find this image</h1>");
  // }
});

server.listen(3000);
