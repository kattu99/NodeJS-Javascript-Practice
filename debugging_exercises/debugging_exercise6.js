function isBig (thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
console.log(isBig(1))    // false
console.log(isBig([2]))  // false
console.log(isBig([3]))  // true

/*

We have an abstract equality comparison algorithm, according to this if we compare a number with an object the array gets converted to an array, here we only have one item so [2] == 2.

Its pretty obscure for developers so should generally avoid this operator. 

*/

console.log([] == ![])
console.log([] == false)
console.log("1" == true)
console.log("01" == true)
console.log("01" == "1")