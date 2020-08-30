/* 
if you have many files can get really messy to work with so we break up the code into different files, don't need to randomly take chunks, instead group similar code togetber, you can group related
code together

Reference movies.js, we want to include it in another file, the correct terminology is export and import into app.js whenever you do it it doesn't get exported by default, the code that gets exported is 
determined by module.export
*/ 

/* whenever you're importing another module you set it to a variable */ 
var movies = require('./movies')
/* ./ says look in same directory as file you're at for the movies, you look at app.js and scan the directory and look for movies.js, you never include the .js extension because browser can't access a file system. 
whats point of ./ can't i just write movies, whenever you import core modules use plain keyword instead of the path, you use the require and the path and don't include the .js extension" 
You require code from a line, what are you exporting and where are you putting it, you made a variable called avatar so you can run it as expected */ 

movies.avatar();

// you only export avatar if you do movies.printChappie() it won't work, essentially same as public or private variables //
