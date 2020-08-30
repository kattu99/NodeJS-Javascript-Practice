function main() {
    const hypo = getLengthOfHypotenuse(3,4)
    console.log(hypo)
}

function getLengthOfHypotenuse(a, b) {
    const squareA = square(a)
    const squareB = square(b)
    const sumOfSquares = squareA + squareB
    return Math.sqrt(sumOfSquares)
}

function square(number) {
    return number * number
}

main()

console.log('script start')

const interval = setInterval(() => {
  console.log('setInterval')
}, 0)

setTimeout(() => {
  console.log('setTimeout 1')
  Promise.resolve().then(() => {
    console.log('promise 3')
  }).then(() => {
    console.log('promise 4')
  }).then(() => {
    setTimeout(() => {
      console.log('setTimeout 2')
      Promise.resolve().then(() => {
        console.log('promise 5')
      }).then(() => {
        console.log('promise 6')
      }).then(() => {
        clearInterval(interval)
      })
    }, 0)
  })
}, 0)

Promise.resolve().then(() => {
  console.log('promise 1')
}).then(() => {
  console.log('promise 2')
})