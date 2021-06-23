// node filename.js arguments
// process.argv[0] => node
// process.argv[1] => filename.js
// process.argv[2] => arguments

var data = process.argv[2];

console.log(data);
var names = data.split(",");
console.log("In Child Process:", names);

function sayHello(names) {
  names.forEach((name) => {
    console.log(`Greetings ${name}`);
  }, this);
}
sayHello(names);
console.log("After function call");
