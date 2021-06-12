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

(2) Event Model: concurrency model for handling multiple connections and the use of callbacks

(a) Slow I/O operations are handled with events and callbacks so that they don't block the main single-threaded execution runtime.

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

- ## How exactly does this event loop work?
