var fs = require("fs");
var data = fs.readFileSync('corn.txt');
console.log(data.toString());
console.log("Program Ended");

fs.readFile('corn.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
 });
console.log("Program Ended")

/*

The two examples explain concept of blocking and non-blocking calls

1. The first example shows that program blocks until file is read, then proceeds
to end the program 

2. Second example shows that program doesn't wait for file reading and prints
"Program Ended" at the same time, the program without blocking continues to read the file.

Blocking program executes in sequence, from programming view easy to implement logic, but 
non blocking don't execute in sequence, in any case program uses its dat to be processed, contained
in same block for sequential execution 

*/