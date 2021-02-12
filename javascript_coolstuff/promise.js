/* A promise is an object that returns a value that you hope to recieve in the future, but not now */ 
/* The value will be returned by the promise in the future, so the promise is suited for asynchronous operations 
A promise function has three states: 
1. Pending -> don't know if you complete
2. Fulfilled - complete 
3. Rejected - event doesn't happen

To create a javascript promise you use the promise constructor. 
*/ 

let completed = true; 

let learnJS = new Promise(function (resolve, reject) {
    if (completed) {
        resolve("I have completed");
    }
    else {
        reject("I haven't completed learning yet");
    }
})

// The promise constructor accepts a function as an argument, the function is called an executor. The executor accepts two functions with the names, by convention, resolve() and reject(). 

/*
When you call new Promise(executor) the executor gets called automatically.

Inside the executor, you manually call the resolve() function if the executor completes successfully and you invoke the reject() function in case any error occurs. 
*/
console.log(learnJS);

completed = false 

console.log(learnJS)

/* To see the pending state you can wrap executor in a set timeout, in pending state its undefined. After some time you can see that its resolved.*/

completed = true 
let learn = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed");
        }
        else {
            reject("I haven't completed learning yet");
        }
    }, 3000);
})

console.log(learn)

completed = false 

console.log(learn)

learn = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed");
        }
        else {
            reject("I haven't completed learning yet");
        }
    }, 3000);
})

console.log(learn)

// you get an unhandled promise rejection

// the promise runs at the time of creation

/* 

Once a promise reaches a fulfilled or rejected state, it stays in that state and can't switch back to the pending state. 
To schedule a callback when promise is resolved you call the Promise object methods: then(), catch(), and finally()
*/

/* Consuming a Promise */

/*
then() 
Schedule when its successfully resolved The then() method takes two callback functions 

promiseObject.then(onFulfilled, onRejected);

*/ 

function makePromise(completed) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (completed) {
                resolve("I have completed learning JS.");
            } else {
                reject("I haven't completed learning JS yet.");
            }
        }, 3 * 1000);
    });
}

learnJS = makePromise(true);

learnJS.then(
    success => console.log(success),
    reason => console.log(reason)
)

// can only do the rejected or normal case 
let masterJS = makePromise(false);

masterJS.then(
    undefined,
    reason => console.log(reason)
);

/* 

the catch method, if you want to schedule a callback to be executed when promise is rejected, you can use the catch() method of the Promise object. 

Internally, the catch() method invokes the then(undefined, onRejected) method.

*/

learnJS.catch(
    reason => console.log(reason)
)

learnJS
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => console.log("How's it going"));
/*

The finally method is used when you wanna execute the same piece of code whether promise is fulfilled or rjected. 

*/