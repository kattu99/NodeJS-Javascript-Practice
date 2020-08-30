/* Instead we need to send back html files, and then the browser can interpret and determine it */ 
/* how to send actual files instead of just text. */


var http = require('http')

// when working with files need the fs module

/*
Also wanna set up a 404 response, if a file isn't present, a response if things go bad 
*/ 

var fs = require('fs')

http.createServer(onRequest).listen(8888);
console.log("Server is now running");

// Handle a user request, listen and send file
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"})
        // we send back a readable string instead. 
        response.write("")
        fs.createReadStream("./index.html").pipe(response) // gives you the information we send out
    }
    else {
        send404Response(response)
    }
}

function send404Response(response) { 
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 Not Found");
    response.end();
}