/* 
Node.js is different from plain javascript because plain js was made for browsers, where as node.js is server side code. People try to connect to that server and web page and your server will 
look at the request and get information. The code written could potentially be on a server, and a browser is just a user trying to connect to a server.

It is incredibly easy to set up a server, we just need an http module thats built in and need to call createServer()
*/

var http = require('http')

/* 

createServer takes in a requestListener that is a call back for code that you want to call. Whenever you connect server has to be listening for a request. 

*/ 

http.createServer(onRequest).listen(8888);
console.log("Server is now running");

// the server listens to traffic and logs out on the command line, we want to call the function on request. You just get a plain data back. 

function onRequest(request, response) {
    console.log("A user made a request: " + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("here's your response");
    response.end() //signifies the response is ending
}

/*
Any information about the user request is accessed through the request object, while the response is what we send back to the user and here is the error, the request is from them
and the response is what we send back. 
You print something out in the terminal and then start building the response. You send back a status code for the user you want to send back to, and then you know about 404, you find what you're looking 
for and you can check. 
Logs user made a request and the website they wanted to write. Favicon -> is for the icon that you get, whenever they connect using a browser and wants the icon that it has on the backend. 
Why does it send a double request, what you say is run the callback code and then log it out, and set up the response and send back the plaintext, or whatever information you want. 

It responds with a file right there, a user goofing around that gets cornbacon, the page doesn't exist so you get the 404 error and you can figure out that it did connect to server no problem, didn't have anything for them
and you get a 404 response. 
*/


