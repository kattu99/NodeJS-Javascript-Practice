/*

A promise represents an eventual completion or failure of an asynchronous opration, you can achieve results from performing async operations using call back
or by using promises.

A key difference between the two is when using the callback approach, 
we’d normally just pass a callback into a function that would then get called upon completion in order to get the result of something. 
In promises, however, you attach callbacks on the returned promise object.

*/ 

/* -- CALLBACK -- */
function getMoneyBack(money, callback) {
    if (typeof money !== 'number') {
        callback('money is not a number')
      } else {
        callback(money)
      }
}

const money  = getMoneyBack(1200, console.log)
console.log(money)

/* --- Promise --- */ 

function getMoney(money) {
    return new Promise((resolve, reject) => {
        if (typeof money !== 'number') {
          reject(new Error('money is not a number'))
        } else {
          resolve(money)
        }
      })
}
    
getMoney(1200).then((money) => {
    console.log(money)
}) 

/* Why do we need promises in javascript? 

We can create a callback hell where we just keep chaining asynchronous operations at a time and end up at a callbackc hell, which is hard to read and unmanagable.
Just from three asynchronous API calls, callback hell has begun sinking opposite of the usual top-to-bottom direction.

Problems Occurring From Callback Hell
1. Harder to read
2. Code nested deeper
3. Don't want to shadow vairables
4. accoutn for different errors at three locations
5. renaming errors, changing scopes, additional requests and not clash scopes
Instead promises let us chain the calls and use .then. 

Promise chaining becomes absolutely useful when we need to execute a chain of asynchronous tasks. Each task that’s being chained can only start as soon as the previous task has completed, controlled by the .thens of the chain.
Those .then blocks are internally set up so they allow the callback functions to return a promise, which are then subsequently applied to each .then in the chain.
Anything you return from .then ends up becoming a resolved promise, in addition to a rejected promise coming from .catch blocks.

*/ 

const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2))

add(2, 4)
  .then((result) => {
    console.log(result) // result: 6
    return result + 10
  })
  .then((result) => {
    console.log(result) // result: 16
    return result
  })
  .then((result) => {
    console.log(result) // result: 16
  })

  /* Promise methods

  1. Promise.all -> accumulate a batch of async operations and recieve each value as an array, one of the promise methods that satisfies this goal is Promise.all 
 
  2. Promise.race -> This method returns a promise that either fulfills or rejects whenever one of the promises in an iterable resolves or rejects with either the value or the reason from that promise.
  */
 const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('some result')
    }, 200)
  })
  
  const promise2 = new Promise((resolve, reject) => {
    reject(new Error('some promise2 error'))
  })
  
  Promise.race([promise1, promise2])
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.error(error)
    })

/* 3. Promise.allSettled, resembles Promise.all but instead of rejecting when one fails, it eventually returns a promise that always resolves after all have been
resolved or rejected, accumulating results into array where each item is result of promise operation */