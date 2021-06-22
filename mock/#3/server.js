let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/image1") {
    fs.readFile("1.jpg", (err, img) => {
      if (err) {
        res.writeHead(400, { "Context-type": "text/HTML" });
        res.end("<h1>Can't find the image</h1>");
      } else {
        res.writeHead(200, { "Context-type": "image/jpg" });
        res.end(img);
      }
    });
  } else {
    res.writeHead(400, { "Context-type": "text/HTML" });
    res.end("<h1>Can't find this image</h1>");
  }
});

server.listen(3000);
