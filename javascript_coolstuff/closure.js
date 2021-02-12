const { ppid } = require("process");

var counter = 0;

function add() {
    counter += 1;
}

add();
add();
add(); 
console.log(counter)

var counter = 0; 

function add() {
    var counter = 0; 
    counter += 1;
}

add();
add();
add(); 
console.log(counter)

/* A nested function on the other hand lets you access scope above. */
function add() {
    var counter = 0;
    function plus() {
        counter += 1; 
    }
    return counter; 
}
// if you only reach counter once need to execute it once. 

// this is essentially a self invoking function

var add = (function () { 
    var counter = 0; 
    return function() {
        counter += 1; 
        return counter; 
    }
})(); 

// the self invoking function runs once, sets counter to 0 and returns a function expression, this way add becomes a function and it accesses the counter in the parent scope. Function can have private variables. 

add();
add();
add(); 
console.log(add())

// counter is protected by scope of anonymous function, can only be changed by the add function