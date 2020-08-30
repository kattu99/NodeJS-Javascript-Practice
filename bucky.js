var movies = require('./new_movies');
// we're leaving it blank
console.log("Bucky's fav is: " + movies.favMovie)
// will print The Notebook because they share the same object 
/* 
This is useful in many cases, where for performance and memory, you have different references that share performance and memory but sometimes not behavior you want. 
The object gets shared across many modules, when you want your own movie. 
*/ 
var movies_second = require('./object_factory');
var buckyMovies = movies_second(); 
buckyMovies.favMovie = "Good Will Hunting"
console.log("Bucky's fav movie: " + buckyMovies.favMovie)
/* You can see that in this case a new object was created by the function". Each one has its own copy and this gives it an unshared object, they can each have their own custom copy. */
