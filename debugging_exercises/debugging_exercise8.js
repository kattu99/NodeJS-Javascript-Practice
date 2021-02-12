// analyze the function stack with this platform

function recurse(x) {
    if (x === 0){
        return true;
    } 
    return recurse(x - 1);
}

var x = recurse(4);