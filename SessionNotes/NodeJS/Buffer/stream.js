// buffer is internally used by streams
let http = require("http");
let fs = require("fs");

// __dirname: current directory path
// highWaterMark: chunk.length <= 250
let myReadStream = fs.createReadStream(__dirname + "/data.txt", {
  highWaterMark: 250,
});
let myWriteStream = fs.createWriteStream(__dirname + "/write.txt");

// stream: read file chunk by chunk
// myReadStream.on("data", function (chunk) {
//   console.log("New Chunk Recieved:");
//   console.log(chunk);
//   console.log(chunk.length);
//   myWriteStream.write(chunk);
// });

// pip read to write
myReadStream.pipe(myWriteStream);

/////////////////////////////////////////////
let server = http.createServer(function (req, res) {
  console.log("request was made from: " + req.url);

  //header
  res.writeHead(200, { "Content-Type": "text/plain" });
  const myReadStream = fs.createReadStream(__dirname + "/data.txt");
  myReadStream.pipe(res);
});
server.listen(3000);
console.log("server running at 3000");
