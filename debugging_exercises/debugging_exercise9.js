var arr = [1, 2, 3, 4, 5];
delete arr[0];

console.log(arr.length);

var arr = [1, 2, 3, 4, 5];
arr.splice(0, 1);

console.log(arr.length);

var dividend = 18;
var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
var idx;

for (idx = 0; idx < numbers.length; idx++) {
  var factor;
  var divisor = numbers[idx];

  if (divisor  % dividend === 0) {
    factor = true;
  }

  if (factor) {
    console.log(divisor + ' is a factor of ' + dividend + '!');
  }
}

var person; 

let data = {
    sayName: function displayInfo() {
        console.log("savage");
    }
};
data.sayName();

function data2() {
    let thing = "foo";
}
data2.thing;

for(let i=0; i < 5; i++){
    console.log(i);
}

function addIfEven(num){
    if(num % 2 == 0){
        return num + 5;
    }
    return num;
}

function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}

function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers());