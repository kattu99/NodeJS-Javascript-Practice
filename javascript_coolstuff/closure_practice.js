// This example is explained in detail below (just after this code box).
function celebrityIDCreator (theCelebrities) {
    var uniqueID = 100;
    for (let i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = 
            function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
                return function () {
                    return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
                } () // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
            } (i); // immediately invoke the function passing the i variable as a parameter
    } 
    
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id);

/* 
With var you have a function scope, and only one shared binding for all of your loop iterations - i.e. the i in every setTimeout callback means the same variable that finally is equal to 6 after the loop iteration ends.

With let you have a block scope and when used in the for loop you get a new binding for each iteration - i.e. the i in every setTimeout callback means a different variable, each of which has a different value: the first one is 0, the next one is 1 etc.
*/