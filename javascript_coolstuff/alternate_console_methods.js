// console.log traditional

// console.group you create a new collection

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

// console table takes an array or an object and outputs an ascii table. Useful for long or large objects with many properties.
console.table(["hi", "im", "rahul"]);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);

//

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);

var family = {}
family.mom = new Person("John", "Smith");
family.dad = new Person("JAne", "Doe");
family.son = new Person("Jessie", "Lingard");
console.table(family);

// console.dir 

/*
The Console method dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.
*/

console.dir(family, {colors: true, depth: 3})