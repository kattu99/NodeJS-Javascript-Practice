function printAvatar() {
    console.log("Avatar: PG-13");
}

function printChappie() {
    console.log("Chappie: PG-13")
}

module.exports.avatar = printAvatar;

// add another one
module.exports.chappie = printChappie;

// is there a more efficient way of doing it, 

/* module is an object and you have a module.exports = [] as default, and its set to a blank object you're basically adding name, value pairs to the object and whenever you import
whatever is inside it, thats how you know how it knows what to import or export. What we can do as we write our functions, is write directly into the object. */

module.exports = {
    printAvatar: function() {
        console.log("Avatar");
    },
    printChappie: function() {
        console.log("Chappie");
    },
    favMovie: "helloWorld",
}

// pretty convenient as we only had to write it one time, you can do it with additional functions, and you can do it with variables also, you can do console.log(favMovie)