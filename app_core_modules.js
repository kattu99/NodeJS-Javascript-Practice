/* core modules are functionality that you use alot within node.js*/

/* the common practice is: 
1. not include path for a common module so node is aware that its a core module not one that you made faster
2. use same variable as the js file you are requiring 
*/

/* fs is the file system module */
var fs = require('fs')

fs.writeFileSync("corn.txt", "Corn is goood, corn is life")

console.log(fs.readFileSync("corn.txt")) // prints buffer
console.log(fs.readFileSync("corn.txt").toString()) 
/* This will return a terminal, a quick demo of what a core module is, it is built in node.js for us */ 

/* path module -> good for working with file paths. It normalizes the slashes esp for different file paths on different operating systems, and what it does is normalize it 
depending on the operating system. You can just use console.log and path normalize. Gets rid of two forward slashes, and can convert slashes efficiently. */
var path = require("path")
var websiteHome = "Desktop/Bucky//index.html"
var websiteAbout = "Desktop/Bucky//about.html"
console.log(path.normalize(websiteHome)) //base path
console.log(path.dirname(websiteAbout)) // file name
console.log(path.extname(websiteAbout)) // use actual function on the path module 
// gives you name without the directory portion on it, gives you the file name and checks the extension. '

/* core modules are already built into node */ 

/* setTimeout -> schedule a callback to run after a period of time 
   setInterval -> schedule code to run after a certain amount of time but will run repeatedly.
*/

setInterval(function() {
    console.log("beef");
}, 2000)
// every two seconds see this called 

/* other code we use is */
console.log(__dirname)
console.log(__filename) // full path + the filename and the file extension

