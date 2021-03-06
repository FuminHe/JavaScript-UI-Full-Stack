# Content

1. OverView
   1. [why need NodeJS?](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#overview)
   2. [JS vs. NodeJS](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#overview)
   3. [Sync vs. Async](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#overview)
   4. [single thread vs. multi-thread (event loop)](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#overview)
2. Modules
   1. [Events](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#events)
   2. [Buffer](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#buffer)
   3. [Stream](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#stream)
   4. [Process (child_process, cluster)](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#process-child_process--cluster)
   5. [Crypto](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#crypto)
   6. [File system](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#fs)
   7. [Globals](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#global)
   8. [HTTP](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#http)
   9. [OS](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#os)
   10. Path
   11. [REPL](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#repl---run-eval-print-loop)
   12. [Error Handling](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#error-handling)
   13. [CommonJS vs. AMD](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#commonjs-vs-amdasynchronous-module-definition)
3. Packages
   1. [Mongoose](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#mongoose)
   2. [Express](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#express)
   3. [GraphQL](https://github.com/FuminHe/JavaScript-UI-Full-Stack/tree/main/SessionNotes/NodeJS#graphql)

# Overview

**1. Why we need NodeJS?**

It lets JavaScript run outside brower. So that we could create server..and so on.

**2. JavaScript vs. NodeJS**

[Difference between Node.JS and Javascript](https://www.geeksforgeeks.org/difference-between-node-js-and-javascript/)

**3. Synchronous vs. Asynchronous**

[What every programmer should know about Synchronous vs. Asynchronous Code](https://adrianmejia.com/asynchronous-vs-synchronous-handling-concurrency-in-javascript/)

**4. Single thread vs. multi thread in NodeJS**

[Multi threading and multiple process in Node.js](https://itnext.io/multi-threading-and-multi-process-in-node-js-ffa5bb5cde98)

1. Event Loop: conditions and stages.

   - NodeJS actually has only **one thread** and a **event loop** inside this one thread. Inside `event loop`, we need to check conditions first and then excute this event loop following five stages:

   ```javascript
   // node myFile.js
   const pendingTimers = [];
   const pendingOSTasks = [];
   const pendingOperations = [];

   // new timers, tasks, operations are recorded from myFile running
   myFile.cunContents();

   // event loop: check condistions
   function shouldContinue() {
     // Check one: Ang pending setTimeout, setInterval, setImmediate? => push to pendingTimers
     // Check two: Ang pending OS tasks?(like server listening to port) => push to pendingOSTasks
     // Check three: Ang pending long running operations?(like fs module) => push to pendingOperations

     return (
       pendingTimers.length || pendingOSTasks.length || pendingOperations.length
     );
   }

   // event loop: excute follow these stages:
   while (shouldContinue()) {
     // (1) Node looks at pendingTimers and sees if any functions are ready to be called: setTimeout, setInterval
     // (2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
     // (3) Pause excution. Continue when...
     //     - a new pendingOSTask is done.
     //     - a new pendingOperation is done.
     //     - a timer is about to complete.
     // (4) Look at pendingTimers. Call any setImmediate
     // (5) Handle any close events
   }
   ```

   - But some of Node framework/Std Lib are **not single threaded**. Like fs module, crypto Module. Because `V8` engine excutes the crypto algorithms with the help of `libuv`(managing asynchronous I/O operations). `libuv` has a **thread pool** with default 4 threads inside, you could increase/decrease thread there.

     > Set the number of threads used in libuv's threadpool: UV_THREADPOOL_SIZE = sizeYouWant

2. Event Model: concurrency model for handling multiple connections and the use of callbacks.

   1. Slow I/O operations are handled with events and callbacks so that they don't block the main single-threaded execution runtime.

   - what is I/O?
     > 1. I/O is short for input/output.
     > 2. I/O is used to label a communication between a process in a computer CPU and anything external to that CPU: including memory, disk, network, and even another process.
     > 3. The process communicates with these external things with signals or messages. **Those signals are input when they are received by the process, and output when they are sent out by the process.**
     > 4. The term I/O is really overused, because naturally, almost every operation that happens inside and outside computers is an I/O operation, but when talking about Node's architecture, the term I/O is usually used to reference accessing disk and network resources, which is the most time-expensive part of all operations.
     > 5. Node's event loop is designed around the major fact that the largest waste in computer programming comes from waiting on such I/O operations to complete.
     > 6. We can handle requests for these slow operations in one of many ways.
   - How to handling slow I/O

     > 1. We can just execute things synchronously. This is the easiest way to go about it, but it's horrible because one request is going to hold up other requests. We can fork a new process from the OS to handle each request, but that's probably won't scale very well with a lot of requests.
     > 2. The most popular method for handling these requests is threads. We can start a new thread to handle each request.
     > 3. But threaded programming can get very complicated when threads start accessing shared resources.
     > 4. A lot of popular libraries and frameworks use threads. For example, Apache is multithreaded and it usually creates a thread per request. On the other hand, its major alternative, Nginx is single threaded, just like Node, which eliminates the overhead created by these multiple threads and simplify coding for shared resources.
     > 5. Single threaded frameworks like Node use an event loop to handle requests for slow I/O operations without blocking the main execution runtime. This is the most important concept to understand about Node.

   2. Event Loop: How exactly does this event loop work?

   - What is Event Loop?

     > 1. The entity that handles external events and converts them into callbacks invocations.
     > 2. A loop that picks events from the event queue and pushed their callbacks to the call stack.
     > 3. Node automatically starts when it executes a script.
     > 4. Event loop is what makes the asynchronous callback programming style possible.
     > 5. Node will exit the event loop when there are no more callbacks to perform.

   ![image](https://user-images.githubusercontent.com/46466591/121790998-02f5d700-cb9a-11eb-84e1-db5bc23911d3.png)

   - what is **heap**?

     > Where objects are stored in memory. Basically the memory that gets allocated by the VM for various tasks.

     > For example, when we invoke a function, an area in this heap is allocated to act as the local scope of that function.

   - what is **stack** in V8?

     > The V8 Call stack which is simply a list of functions. A stack is a first in last out simple data structure.

     > Every time we step into a function, it gets pushed to the stack, and every time we return from a function, it gets popped out of the stack. It's really that simple.
     > ![image](https://user-images.githubusercontent.com/46466591/121791322-97ae0400-cb9d-11eb-87e5-ced649888a59.png)

   - How dose **Callback** work?

     For Example:

     ```javascript
     const slowAdd = (a, b) => {
       setTimeout(() => {
         console.log(a + b);
       }, 5000);
     };

     slowAdd(3, 3);
     slowAdd(4, 4);
     ```

     - step 1: start with the anonymous function => _push anonymous() to `Call Stack`_.

     - step 2: push slowAdd(3,3) first, then push setTimeout(callback1,delay1) to `Call Stack`.

     - step 3: Node sees a call to its setTimeout API, takes note of it, and instantiate a timer outside of the JavaScript runtime. => _Timer callback1 is pushed to `Node`_.

     - step 4: Pop out setTimeout(callback1,delay1) first, then pop out slowAdd(3,3).

     - step 5: push slowAdd(4,4) first, then push setTimeout(callback2,delay2) to `Call Stack`.

     - step 6: push Timer callback2 to `Node`.

     - step 7: Pop out setTimeout(callback2,delay2) first, then pop out slowAdd(4,4).

     - step 8: when timers complete, push callback1 and callback2 to `Queue`.

     - step 9: **Event Loop** => loop till `Queue` and `Call Stack` are empty: **(1)** pop callback1 out from `Queue`, push it into `Call Stack`, get return, pop callback1 out from `Call Stack`; **(2)** pop callback2 out from `Queue`, push it into `Call Stack`, get return, pop callback2 out from `Call Stack`.

       ***

       Event Loop monitors the `Call Stack` and the `Event Queue`. When the stack is empty, and the queue is not empty (there are events waiting to be processed in the queue).

       It will de-queue one event from the queue and push its callback to the stack. It's called an event loop, because it loops this simple logic until the event Queue is empty.

**5. V8 - Javascript engine**

# Modules

## require & export

```javascript
// elements.js
module.exports = elements;

// main.js
const ele_module = require(./elements);
```

## Events

```javascript
// require the API
let event = require("events");

// create an event instance
let myEmitter = new event.EventEmitter();

// define how to invoke the event
myEmitter.on("run", function (msg) {
  console.log("Program Running: ", msg);
});

// invoke
myEmitter.emit("run", "The message");
```

---

```javascript
// if we need to use event on an object
// we need util to inherit events
let util = require("util");

let Person = function (name) {
  this.name = name;
};
util.inherits(Person, event.EventEmitter);

let jhon = Person("Jhon");

jhon.on("jump", function () {
  console.log(person.name + " is jumping");
});

jhon.emit("jump");
```

## I/O Operation

### fs

- fs.readFileSync / fs.writeFileSync
- fs.readFile / fs.writeFile
- fs.unlink
- fs.rmdir

```javascript
let fs = require("fs");

// sync
const read = fs.readFileSync("source.txt", "utf-8");
fs.writeFileSync("write.txt", data);

//async - callbacks
/* read */
fs.readFile("source.txt", "utf-8", (err, data) => {
  if (err) throw err;
  else console.log(data);
});
/* write */
fs.writeFile("write.txt", data, (err) => {
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
```

### http

- res.writeHead(200,{"Content-Type":""})
- res.end() => end the res
- res.write() => res could still write other things to res till res.end
- How to handle image?
  - make `res.writeHead(200, { "Content-Type": "image/jpeg" });`
  - use html and <img> tag
    ```javascript
    // data is from fs.readFile("xx.jpg",(err,data))
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<html><body><img src="data:image/jpeg;base64,');
    res.write(Buffer.from(data).toString("base64"));
    res.end('"/></body></html>');
    ```
  - buffer write img-file
    ```javascript
    // file is from fs.open(filePath, "r", function (err, file) {}
    buff = Buffer.alloc(99000);
    fs.read(file, buff, 0, buff.length, 0, (err) => {
      console.log(err);
    });
    res.end(buff);
    ```
- What is URL encoding? => solve the following two problems

  [What is URL Encoding and How does it work?](https://www.urlencoder.io/learn/)

  - Reserved characters like ?, /, #...
  - unsafe characters like space, \, <, >, {, } etc, and any character outside the ASCII charset is not allowed to be placed directly within URLs.

```javascript
let http = require("http");

// create server
let server = http.createServer(function (req, res) {
  // set header for res
  res.writeHead(200, { "Content-Type": "text/html" });
  // end the res, can't send any data after res.end()
  res.end("<h1>end of res</h1>");
});

// set port and IP
server.listen(3000, "127.0.0.1");
console.log("Server is running at port 3000");
```

### Buffer

- `Buffer.alloc(8)`
- `Buffer.from([8, 9, 7, 5, 3, 0, 9])`
- `buffer.write("hello", 2, "utf-8")`

### Stream

> There are four fundamental stream types within Node.js:
>
> - **Writable**: streams to which data can be written (for example, `fs.createWriteStream()`).
> - **Readable**: streams from which data can be read (for example, `fs.createReadStream()`).
> - **Duplex**: streams that implement both the Readable and Writable interfaces. (for example, `net.Socket`).
> - **Transform**: Duplex streams that can modify or transform the data as it is written and read (for example, `zlib.createDeflate()`).

- Read Stream

```javascript
myReadStream = fs.createReadStream(__dirname + "/data.txt", {
  highWaterMark: 250,
});
```

- Write Stream

```javascript
myWriteStream = fs.createWriteStream(__dirname + "/write.txt");
```

- pipe: read.pipe(write)

```javascript
myReadStream.pipe(myWriteStream);
```

## Promise

- `new Promise((resolve, reject) => {}).then().catch()`

- resolve(result) => `.then((result)=>{})`
- reject(err) => `.catch((err)=>{})`

## Mongoose

- step 1: connect with MongoDB in app.js

  ```javascript
  const dbURL = "mongodb://localhost:27017/mongooseDemo";
  mongoose.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
  ```

- step 2: build schema for collection

  ```
    const Schema = mongoose.Schema();
    const sampleSchema = new Schema(
      {},{}
    )
  ```

- step 3: build routes(find,update,delete)

  ```
  const router = require("express").Router();

  sampleSchema.find()
  sampleSchema.findById()
  sampleSchema.findByIdAndRemove()
  sampleSchema.findByIdAndUpdate()
  ```

## JWT

- session id in cookie vs. JWT

  - Session Id problem: server needs to store uer info in server memory.
  - JWT: sever don't need to store info.

- prevent change token in local storage?

- syntax

  ```javascript
  //generate
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "25s" });
  // verify
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
  ```

## Bcrypt

## OAuth - authorization

## Crypto

The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

1. bcrypt

   Do slow and computationally expensive hashing -- this will generally be for hashes where you really don't want an attacker to be able to reverse the hash, e.g. user passwords.

1. scrypt

   `crypto.scrypt(password, salt, keylen[, options], callback)`

   Similar to `bcrypt`

1. Cipher/Decipher

   `crypto.createCipher(algorithm, password[, options])`

   `crypto.createDecipher(algorithm, password[, options])`

1. MD5

   `crypto.createHash('md5').update(data).digest("hex");`

1. PBKDF2 - Password-Based Key Derivation Function 2

   `crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)`

1. SHA-256

   ```js
   require("crypto")
     .createHash("sha256")
     .update("Man oh man do I love node!")
     .digest("hex");
   ```

## Caching - redis

https://github.com/FuminHe/Full-Stack-Note/blob/main/redis-nodejs/app.js

## Process (child_process & Cluster)

### Process

The `process` object is an instance of `EventEmitter`.

- process.exit()

  The `process.exit()` method instructs Node.js to terminate the process synchronously with an exit status of code. If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set.

  **Node.js will not terminate until all the 'exit' event listeners are called.**

- process.abort()

  The `process.abort()` method causes the Node.js process to **exit immediately** and generate a core file.

- process.arch
- process.argv
- process.channel
- `stdio` stream: stdin,stdout,stderr - duplex stream

  ```js
  const { spawn } = require("child_process");
  const child = spawn("wc");

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    console.log(`child stdout:\n${data}`);
  });
  ```

- [`process.nextTick(callback[, ...args])` VS. `setImmediate()`](https://stackoverflow.com/questions/15349733/setimmediate-vs-nexttick)

  - `process.nextTick()` fires immediately on the same phase
  - `setImmediate()` fires on the following iteration or 'tick' of the event loop

  > `process.nextTick()` fires more immediately than `setImmediate()`.
  >
  > A function passed to `process.nextTick()` is going to be executed on the current iteration of the event loop, **after the current operation ends**.
  >
  > `setImmediate` will be checked after setTimeout/pendingOS/pendingOperations.

- Signal events:

  ```js
  process.on("SIGTERM", () => {
    server.close(() => {
      console.log("Process terminated");
    });
  });

  <!-- or -->
  process.kill(process.pid, 'SIGTERM')
  ```

  **`SIGKILL`** is the signal that tells a process to immediately terminate, and would ideally act like `process.exit()`.

  **`SIGTERM`** is the signal that tells a process to gracefully terminate. It is the signal that's sent from process managers like `upstart` or `supervisord` and many others.

### Child Process

[Node.js Child Processes: Everything you need to know](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/)

The `child_process` module enables us to access Operating System functionalities by running any **system command** inside a, well, child process.

There are 4 different ways to create a child process in Node: `spawn()`, `fork()`, and `exec()`/`execFile()`.

- `spawn("system command")`

  ```js
  const { spawn } = require("child_process");

  const child = spawn("pwd");
  child.on("exit", function (code, signal) {
    console.log(
      "child process exited with " + `code ${code} and signal ${signal}`
    );
  });
  ```

  > The other events that we can register handlers for with the ChildProcess instances are **disconnect**, **error**, **close**, **exit**, and **message**.
  >
  > 1. **close** vs. **exit**:
  >
  > - `close`: `stdio` streams of a child process get closed.
  > - `exit`: exit one child process, does not mean that the streams got closed.
  >
  > 2. **message**: It's emitted when the child process uses the `process.send()` function to send messages. **This is how parent/child processes can communicate with each other**.

- `exec()`: spawns a shell first - avaliabel for windows.

  `execFile()`: spawns the command directly without first spawning a shell by default.

  ```js
  const { exec } = require("child_process");
  exec("find . -type f | wc -l", (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    console.log(`Number of files ${stdout}`);
  });
  ```

- `fork()`

  ```js
  const { fork } = require("child_process");

  const forked = fork("child.js");

  // get msg from child
  forked.on("message", (msg) => {
    console.log("Message from child", msg);
  });

  // send msg to child
  forked.send({ hello: "world" });
  ```

### Cluster

The cluster module allows easy creation of child processes that all share server ports.

use `cluster.fork()`

## OS

## Global

## Express

1. why introduce express.js

   `express` module is a web framework that is built on top the `http` module that makes it easy using a fully wedged web server without reinventing the wheel.

   It has routing, middleware to

2. `middleware` in express.js

   **Middleware** functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application???s request-response cycle. The next middleware function is commonly denoted by a variable named next.

   Middleware functions can perform the following tasks:

   - Execute any code.
   - Make changes to the request and the response objects.
   - End the request-response cycle.
   - Call the next middleware function in the stack.

   ```js
   app.get("/posts", authenticateToken, (req, res) => {
     res.json({});
   });

   function authenticateToken(req, res, next) {
      // do something or change the res/req
       next();
     });
   }
   ```

> I feel like all the functions inside router.HttpMethod() or app.use() are all middlewares. Like the `(req, res) => {res.json({});}` above after `authenticateToken` is also a middleware.

## REPL - Read, Eval, Print, Loop

REPL also known as **Read Evaluate Print Loop** is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.

> It is similar to open a console in Chrome, and do things like `1 + 1`, `Math.random()`. And it will give the result `2` and `0.328768439`.

## Error Handling

- `try{} catch{}`
- `reject` and `.catch((err)=>{})` in Promise
- callbacks
- `throw` the error (making it an exception).

  `throw new Error('BROKEN')`

## CommonJS vs. AMD(Asynchronous Module Definition)

- CommonJS: a way of defining modules with the help of an exports object, that defines the module contents.

  ```js
  exports.doSomething = function () {
    return "foo";
  };
  ```

  only allowed **one module per file**, so a "transport format" would be used for bundling more than one module in a file for optimization/bundling purposes.

- AMD: designed to suit the browser environment, support for asynchronous module loading.

  - Defines a way to **include multiple modules in one file**. In CommonJS terms, the term for this is a "transport format", and that group has not agreed on a transport format.

  - **Allows setting a function as the return value**. This is really useful for constructor functions. In CommonJS this is more awkward, always having to set a property on the exports object. Node supports `module.exports = function () {}`, but that is not part of a CommonJS spec.

  ```js
  define(function (require) {
    var dep1 = require("dep1"),
      dep2 = require("dep2");

    return function () {};
  });
  ```

# GraphQL

## Why we use graphQL

1. allow us to aggregate data from different resources: MongoDB, JSON file...
2. graphQL is a query language, but we actually write it as objects.
3. write complex queries easily.
4. In graphQL, we could get what we want without over-fetching like SQL.
   e.g. in SQL: select \* from table where id>100 => it selects all the data first and store in resultSet and then apply where condition to filter and get the final result.
