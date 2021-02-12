
let dog = {
    name: 'doggo',
    sayName () {
        console.log(this.name)
    }
}
let sayName = dog.sayName
sayName()

// the function ran outside of its context 

sayName.bind(dog)()
dog.sayName.bind(dog)()