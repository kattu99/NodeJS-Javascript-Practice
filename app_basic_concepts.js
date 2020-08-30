var person = {
    firstName: "Bucky",
    lastName: "Hello",
};
console.log(person);

/* This is server side code */ 

function addNumber(a, b) {
    return a + b;
}

console.log(addNumber(7,3))

/* this works well */

function worthless() {

}

console.log(worthless())

/* gives undefined, any function w/o return statement returns undefined */ 

var printBacon = function() {
    console.log("bacon is healthy don't believe the doctors")
}

/* you have a function that prints something out, taking the entire function and setting it equal to the print bacon variable" */ 
/* there isn't a point to giving function a name, you can just take it and assign to a variable, called an anonymous function, we can take them and assign them to variables */

printBacon()

setTimeout(printBacon, 5000); 
/* essentially means call the code in 5 seconds, wait 5 seconds and then call the next print bacon, show you that you can take functions assign to variables, and then use them inside other functions */ 

