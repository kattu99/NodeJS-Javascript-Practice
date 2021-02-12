/* Variables that are defined with a const behave like let variables, except they can't be reassigned */ 

/*
const PI = 3.1415
PI = 3.14 ----> error
PI = PI + 10 ----> error
*/

// has the same block scope ideas, except its not the same as x declared outside the block 
var x = 10; 
{
    const x = 2; 
    console.log(x);
}
console.log(x);

/* 

const variables must be assigned a value when they're declared 
const PI;
PI = 3.1415; //incorrect
*/

/* The keyword const is a little misleading.

It does NOT define a constant value. It defines a constant reference to a value.

Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.
*/

/* However, constant objects can change, you can change or add to the properties of const objects */ 

const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = "Johnson"

/*

You can't reassign a const object. 

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    

Const arrays can similarly change, but not be reassigned
*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");


