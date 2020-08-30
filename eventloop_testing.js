fs = require('fs')
/* 
setTimeout(() => {
    console.log("savage")
}, 6000)
setTimeout(() => {
    console.log("savage 2")
}, 4000)
*/

/* 
function main() {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
  }
  
main();
*/

/*

function main2() {
    fs.readFile('corn.txt', () => {
      setTimeout(() => console.log('1'), 0);
      setImmediate(() => console.log('2'));
    });
  }
  
main2();

*/

/*

In this case, the event loop runs without actually executing 
the callbacks, we encounter the fs.readFile which is pushed to IO queue, and callbacks for the function are registered, not starts from timer, doesn't find anything in timers and pending 
callbacks phase. Even loop traverses through the phases and when that file reading completes, it executes the callback. 
After IO Phase moves to the Check(setImmediate) phase, and the call back of setImmediate runs before 
setTimeout(fn, 0)

*/

/*
function main3() {
    setTimeout(() => console.log('first'), 50);
    process.nextTick(() => console.log('second'));
    setImmediate(() => console.log('third'));
    process.nextTick(() => console.log('fourth')); 
}

main3();

*/

/* The process.nextTick comes under microtasks which are prioritised above all 
other phases and thus the callback associated with it is executed just after the event 
loop finishes the current operation. Whatever call back we pass, the eventLoop will complete current operation and execute 
from the microtasks queue until its drained up. Once queue is drained up it returns to phase 
where it left work from. 

1. check microtasks and run
2. Then timer phase where hasn't expired
3. Then check phase where it sees timer expired and executes call bac 
4. next iteration sees a timer of 50 ms and logs down '1'.

*/


// asynchronous callback to process.nextTick

function main4() {
    setTimeout(() => console.log('1'), 50);
    process.nextTick(() => console.log('2'));
    setImmediate(() => console.log('3'));
    process.nextTick(() => setTimeout(() => {
      console.log('4');
    }, 1000));
  }
  
  main4();

/* 
1. All callbacks registered and pushed to queue
2. microtasks executed first, and the second processTick starts execution, pushed to timers
3. Now, the event loop enters its normal phases and executes callbacks. The first phase that it enters is 'Timers'. It sees that the timer of 50ms is not expired and hence moves further to the next phases.
4. It then enters 'Check (setImmediate)' phase and executes the callback of setImmediate which ultimately logs '3'.
5. Now, the next iteration of the event loop begins. In it, the event loop returns back to the 'Timers' phase, it encounters both the expired timers i.e 50ms and 1000ms as per their registering, and executes the callback associated with it which logs first '1' and then '4'.

