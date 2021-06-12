# Overview

**1. Why we need NodeJS?**

It lets JavaScript run outside brower. So that we could create server..and so on.

**2. JavaScript vs. NodeJS**

[Difference between Node.JS and Javascript](https://www.geeksforgeeks.org/difference-between-node-js-and-javascript/)

**3. Synchronous vs. Asynchronous**

[What every programmer should know about Synchronous vs. Asynchronous Code](https://adrianmejia.com/asynchronous-vs-synchronous-handling-concurrency-in-javascript/)

**4. Single thread vs. multi thread in NodeJS**

[Multi threading and multiple process in Node.js](https://itnext.io/multi-threading-and-multi-process-in-node-js-ffa5bb5cde98)

(1) Event Loop: created automatically whenever we run our Node.js application

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

(2) Event Model: concurrency model for handling multiple connections and the use of callbacks
