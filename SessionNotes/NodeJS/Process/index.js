// var cluster = require("cluster");

// if (cluster.isMaster) {
//   var numWorkers = require("os").cpus().length;

//   console.log("Master cluster setting up " + numWorkers + " workers...");

//   for (var i = 0; i < numWorkers; i++) {
//     // create child process and start one by one
//     cluster.fork();
//   }
//   // start child_process
//   cluster.on("online", function (worker) {
//     console.log("Worker " + worker.process.pid + " is online");
//   });

//   cluster.on("exit", function (worker, code, signal) {
//     console.log(
//       "Worker " +
//         worker.process.pid +
//         " died with code: " +
//         code +
//         ", and signal: " +
//         signal
//     );
//     console.log("Starting a new worker");
//     cluster.fork(); // when one exit, it starts again
//   });
// } else {
//   var app = require("express")();
//   app.all("/*", function (req, res) {
//     res.send("process " + process.pid + " says hello!").end();
//   });

//   var server = app.listen(8000, function () {
//     console.log(
//       "Process " + process.pid + " is listening to all incoming requests"
//     );
//   });
// }

// -----------------------spawn--------------------------------------
const spawn = require("child_process").spawn;

const names = ["John", "Jack", "Jim"];

const child = spawn(process.execPath, ["forkchild.js", names]);

// cosole.log() used stdout.write()
child.stdout.on("data", function (data) {
  console.log("From Child:", data.toString());
});

child.unref();

// By default, the parent will wait for the detached child to exit.
// To prevent the parent from waiting for a given subprocess to exit,
// use the subprocess.unref() method.
// Doing so will cause the parent's event loop to not include the
// child in its reference count, allowing the parent
// to exit independently of the child,
// unless there is an established IPC channel between
// the child and the parent.
