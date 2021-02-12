/*

How to load json and display

*/ 

function load(url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest(); 

        request.onreadystatechange = function (e) {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    reject(this.status);
                }
            }
        }
        request.open('GET', url, true)
        request.send(); 
    })
}

/*

Inside the executor, we call the resolve() function and pass in the response if the HTTP status code is 200, otherwise invoke the reject and pass in the HttpStatus code, 
you register the button click and call the then() method on the Promise, if the load is successful we show the message returned from server, otherwise we show error message with the HTTP status code. 

*/

load('https://www.javascripttutorial.net/sample/promise/api.json')
.then(
    response => {
        const result = JSON.parse(response);
        msg.innerHTML = result.message;
    },
    error => console.log(error)
).then(response => console.log(response), error=> console.log("fucked"));

const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });

/* 
Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

Benefits of Promises
    1. Improves Code Readability
    2. Better handling of asynchronous operations
    3. Better flow of control definition in asynchronous logic
    4. Better Error Handling
    
Promise Summary: 
    1. A promise is an object that returns a value in the future.
    2. A promise starts in the pending state and ends in either fulfilled state or rejected state.
    3. Use then() method to schedule a callback to be executed when the promise is fullfiled, and catch() method to schedule a callback to be invoked when the promise is rejected.
    4. Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.
*/