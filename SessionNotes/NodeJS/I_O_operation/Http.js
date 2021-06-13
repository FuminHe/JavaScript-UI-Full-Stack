let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  //   // set header for res
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   // end the res, can't send any data after res.end()
  //   res.end("<h1>end of res</h1>");

  // read file/image and send to client
  //   fs.readFile("data.txt", "utf-8", (err, data) => {
  //     if (err) console.log(err.nessage);
  //     else {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.write(data);
  //     }
  //   });
  fs.readFile("1.jpg", (err, data) => {
    if (err) console.log(err.nessage);
    else {
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.write(data);
    }
  });
});

// port and IP
server.listen(3000, "127.0.0.1");
console.log("Server is running at port 3000");
