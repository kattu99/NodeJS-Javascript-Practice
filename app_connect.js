/* Connect -> everything has been installed properly for us. Downloaded connect onto the node modules.*/
var connect = require('connect');
var http = require('http');

/* it just takes the request and response and figures out how to handle the request */

app = connect(); 

app.use(doFirst); 
app.use(doSecond); 

function doFirst(request, response, next) { 
    console.log("request made")
    next();
}

function doSecond(request, response, next) {
    console.log("Bacon");
    next(); 
}

/*
next makes it go to the next one on the stack, you can decide to call the next method. 
*/

// you can take middleware and stack on top of each other one by one. 

/* we can also have optional argument of the path, allows you to handle different user requests based on the path, this lets you quickly display related html in a nice neat way*/

function profile(request, response) {
    console.log('User requested the profile')
}

app.use('/profile', profile)

function profile(request, response) {
    console.log('User requested the profile')
}



http.createServer(app).listen(8888)

// just pass in app as the argument fro the create Server and specify port to listen on 

