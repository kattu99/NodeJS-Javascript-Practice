var movies = require('./new_movies');
movies.favMovie = "The Notebook"
console.log("Emily's fav is: " + movies.favMovie)

var movies_second = require('./object_factory');
var emilyMovies = movies_second(); 
emilyMovies.favMovie = "The Notebook"
console.log("Emily's fav movie: " + emilyMovies.favMovie)