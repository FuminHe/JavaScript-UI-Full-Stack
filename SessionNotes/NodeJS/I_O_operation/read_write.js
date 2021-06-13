let fs = require("fs");

// sync => readFileSync and writeFileSync
const read = fs.readFileSync("data.txt", "utf-8");
console.log(read);
const writeData = "write to a file";
fs.writeFileSync("write.txt", writeData);

// async => use callback functions
fs.readFile("data.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
fs.writeFile("write.txt", writeData, (err) => {
  // callback for err
  if (err) console.log(err.message);
});

// delete a file
fs.unlink("write.txt", (err) => {
  if (err) console.log(err.message);
});

// delete an empty folder
fs.rmdir("a", (err) => {
  if (err) console.log(err.message);
});

// delete a unEmpty folder
fs.rmdir("testFolder", { recursive: true }, (err) => {
  if (err) console.log(err.message);
});
