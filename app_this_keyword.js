/* whenever you see this it refers to the thing that called it, say we have an object Bucky */
var Bucky = {
    printFirstName: function() {
        console.log("My Name is Bucky");
        console.log(this === Bucky);
    }
};

Bucky.printFirstName(); // logs true because this just refers to the thing or object that calls it you can see that bucky calls print first name. 


// create function not part of object
function doSomethingWorthless() {
    console.log("I'm worthless")
    console.log(this === global)
}

// the default calling context is global, its no longer equal to Bucky but worthless 

doSomethingWorthless();

// reference to whatever thing is calling it