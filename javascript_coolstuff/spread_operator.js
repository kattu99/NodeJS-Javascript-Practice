
/*
As you know ... are called Spread Attributes which the name represents it allows an expression to be expanded.
*/

var shooters = ['Cod', 'fortnite', 'ayush']
var racing = ['sand', 'savage', 'bro']
var games = [...shooters, ...racing]

// Destructuring an array 

var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil'];
var [first, ...remaining] = shooterGames;
console.log(first); //Call of Duty
console.log(remaining);

// Combining two objects

var myCrush = {
    firstName: 'Selena', 
    middleName: 'Marie', 
};

var lastname = "my_last_name"

var myWife = {...myCrush, lastname}
console.log(myWife)

// we can also have three dots that let you take in function arguments as an array

function fun1(...params) {
    console.log(params)
}