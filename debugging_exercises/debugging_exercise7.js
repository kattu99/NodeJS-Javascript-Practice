/* Preserve immutability on a list for javascript */ 
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]


const secondHeroes = heroes.map(h => {
    return {
        ...h,
        name: h.name.toUpperCase()
      }
    });
console.log(secondHeroes);

/* 

const newHeroes = heroes.map(h => {
  h.name = h.name.toUpperCase()
  return h
})

console.log(newHeroes); 

*/

const secondList = [1, 2, 3]
secondList[2] = 4
console.log(secondList)
