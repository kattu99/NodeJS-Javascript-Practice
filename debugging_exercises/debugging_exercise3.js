
for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}

// solution

for (let i = 0; i< 4; i++) {
    setTimeout(() => console.log(i), 0);
}

/*
Let is different from var because a new binding or scope is declared at every iteration, you can iterate using a let, and when the function in timeout closes over variable it keeps
a reference
*/

for (var i = 0; i< 4; i++) {
    (function(i) {
        setTimeout(() => console.log(i), 0);
    })(i)
}

/* 

We could also use an Immediately-Invoked Function Expression a.k.a. IIFE. The 'wrapper function' will run as soon as she's defined.

*/