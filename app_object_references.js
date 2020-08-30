/* in node js everything is a reference */

var Bucky = { 
    favFood: "bacon",
    favMovie: "chappie"
};

var Person = Bucky; 
/* you aren't taking a copy, you're essentially taking ref */
Person.favFood = "salad";
console.log(Bucky.favFood);
/* Whenever you change Person.favFood you're changing Bucky's favorite food, you make program like you expected, the proper way to make multiple copies of objects */ 
/* What everyone means by everything is an object */ 
console.log(19 == '19') //true because two equal signs compares the values 19 == 19
console.log(19 === '19') // false because three equal signs compares values and types, all though value is same it will log out as false