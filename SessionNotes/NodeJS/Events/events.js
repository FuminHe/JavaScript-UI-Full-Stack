// // require events APIs from node.js
let events = require("events");
let util = require("util");

// // create an object of the event
// let myEmitter = new events.EventEmitter();

// // invoke the event
// myEmitter.on("run", function (msg) {
//     console.log("Program Running: ", msg);
// });

// myEmitter.emit("run", "The message");

let Person = function (name) {
  this.name = name;
};
util.inherits(Person, events.EventEmitter);

let john = new Person("John");
let marry = new Person("Marry");

let people = [john, marry];

people.forEach(function (person) {
  person.on("jump", function () {
    console.log(person.name + " is jumping");
  });
});

//The eventEmitter.on() method is used to register listeners,
// while the eventEmitter.emit() method is used to trigger the event.
// https://nodejs.org/api/events.html
john.emit("jump");
