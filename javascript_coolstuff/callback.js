/* 

CALLBACKS

Call backs are great ways to handle something after something else has been completed, by something here we mean a function execution, if you want 
to execute a function right after return of some other function, then we use callbacks. 

*/

// Example 1:

function add(a, b, callback) {
    console.log(a+b);
    callback();
}

function disp() {
    console.log("called it back");
}

add(5,6,disp);

/* An alternate way is to use anonymous functions being passed in */ 

add(5,6,function disp() {
    console.log("whats up");
})

/* Callbacks are primarily used while handling async operations like making an API request, fetching/writing data into a file, registering event listeners 
and related stuff. All operations use callbacks, which lets you get the data and error from an aynchronous operation and use callback to do something with the code */

/* Within node js you use callback functions after task is completed inorder to prevent blocking and let other code to run in the meantime. Callback is when a task gets completed and is an
asynchronous equivalent for a function. Using callback, node.js processes a large number of requests and then returns a very scalable result. Once file I/O is completed, a  callback function gets 
called to avoid blocking or wait for file I/O. 
*/ 

var fs = require('fs');
var filedata = fs.readFileSync('testfile.txt'); 
console.log(filedata.toString()); 
console.log("End of Program execution"); 

// when you specify a callback on the other hand it executes code asynchronously

var fs = require("fs");   
    
fs.readFile('testfile.txt', function (ferr, filedata) {   
    if (ferr) return console.error(ferr);   
    console.log(filedata.toString());   
});  
console.log("End of Program execution");

/*
fs -> handles file system related operations 

readFile -> is asynchronous and control returns to next instruction while function is running in background. A callback function gets called when task is done running. 

A callback is invoked after a function has finished its execution, as javascript is an event driven language it doesn't wait for a function to finish execution before moving onto the next one. Callbacks let functions execute one after another. 
*/