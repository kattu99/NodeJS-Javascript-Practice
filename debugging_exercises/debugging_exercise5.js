function Dog (name) {
  this.name = name
}

Dog.bark = function () {
  console.log(this.name + ' says woof')
}

let fido = new Dog('fido')
// fido.bark()

// Solution 1

var boundedBark = Dog.bark.bind(fido);
boundedBark();

// Solution two is to set it on the Dog's prototype -> but this leads to confusion

Dog.prototype.bark = function () {
    console.log(this.name + ' says woof');
}

fido = new Dog('fido')

var secondDog = new Dog('fido')

fido.bark(); 

/* We can also use the class keyword (ES2015) which is just a syntactic sugar to the previous code. */ 

class Dog2 { 
    constructor(name) {
        this.name = name 
    }

    bark() { 
        console.log(this.name + ' says woof ');
    }
}

fido = new Dog2('fido')
fido.bark()