// you can add cool methods to your properties and classes you need users and what does every user have, a name and a life, this name is set to blank

function User() {
    this.name = "";
    this.life = 100; 
    this.giveLife = function giveLife(targetPlayer) { 
        targetPlayer.life += 1;
        console.log(this.name + " gave one life to " + targetPlayer.name);
    }
}

var p1 = new User(); 
var p2 = new User(); 

p1.name = "bucky";
p2.name = "wendy";
p1.giveLife(p2);
console.log("Bucky: " + p1.life);
console.log("Wendy: " + p2.life);

// could users hurt each other might be cool

User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

// every instance of class can access it

p1.uppercut(p2)
console.log("Bucky: " + p1.life);
console.log("Wendy: " + p2.life);

// you can add functions easily to objects in node.js with prototypes

// in addition to functions you can add new properties to existing objects with prototypes
User.prototype.magic = 60; 
console.log(p2.magic);
console.log(p1.magic);