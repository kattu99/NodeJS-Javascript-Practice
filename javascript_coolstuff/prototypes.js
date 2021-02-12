/* 
In javascript you can attach new properties to an object at any time. 
*/

function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

var studObj1 = new Student(); 
studObj1.age = 15; 
console.log(studObj1.age);

var studObj2 = new Student(); 
console.log(studObj2.age);

/* 

what if we wanna add new properties to the function which will be shared across all instances
The answer is a prototype associated with every function and object by default in javascript where the functions prototype propety is 
accessible and modifiable and objects prototype property isn't visible. 

Every function includes a prototype object by default.

function --> prototype 

You can attach additional properties to it which are shared across instances of constructor function. 

*/ 

function Student2 () {
    this.name = "John";
    this.gender = "M";
}

Student2.prototype.age = 15
var stud = new Student2(); 
console.log(stud.age);

/* 
Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.
*/
console.log(Student.prototype)
console.log(typeof studObj1.__proto__); // object

console.log(Student.prototype === studObj1.__proto__ ); // true

/* 
As seen above,
Function's prototype property can be accessed using <function-name>.prototype. 
However, an object (instance) does not expose prototype property, instead you can access it using __proto__.
*/


/* 
As mentioned before, object's prototype property is invisible. 
Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object.

The prototype object is being used by JavaScript engine in two things, 1) to find properties and methods of an object 2) to implement inheritance in JavaScript.

First of all, JavaScript engine checks whether toString() method is attached to studObj? 
(It is possible to attach a new function to a instance in JavaScript). 
If it does not find there then it uses studObj's __proto__ link which points to the prototype object of Student function. 
If it still cannot find it there then it goes up in the heirarchy and check prototype object of Object function because all the objects are derived from Object in JavaScript, and look for toString() method. Thus, it finds toString() method in the prototype object of Object 
function and so we can call studObj.toString().
*/