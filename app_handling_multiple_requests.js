/* You have a database chef, he can cook an egg in 5 seconds, then you also hire a server responsible for taking orders from the customer, the server goes to the db that waits 5 seconds and then when its 
done the server brings the egg and then you're good to go"

They need to get the orders faster so you could hire more servers, you could instead have the server take the orders, tell the chef to cook and then instead of standing around take another order, then get another egg
cooked and boom. Server has no point standing around and then taking an order, instead we start placing orders, she took 3 orders, now he cooks 3 at a time, whenever they're done just tell me and i'll get them, so 1, 2, 3
all eggs are done, boom here you go, instead of 15 seconds, she takes them immediately and chef cooks all eggs at once, they get eggs in 5 seconds instead of 150. 
Don't spend extra money, more efficient way of doing things. 

Whenever you make a web app that deals with real time data where speed is important and social networks, its incredibly fast and efficient, lets see how its done in code.
Like querying a database, which takes hella time, every single client has to wait for other client, it could be a horrible experience, no one would come back 
*/

function placeAnOrder(order_number) {
    // a user connecting to the website to get data, calling that 6 times, gives the order number simple enough
    console.log("Customer Order: ", order_number);
    cookAndDeliverFood( function () {
        console.log("Delivered food order:", order_number);
    })
}

// Do a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
    // after 5 seconds throws a callback, server asks for a call back to get the order and then says call me back whenever thats ready, a bit of code that runs whenever the 5 seconds is up. 
    // whenever a user places an order you place an order and call cook and deliver food, you can actually have functions that pass in parameters as other functiosn, code we run after 5 seconds, you can have
    // an anonymous function with a console.log that logs out something 
    //querying takes 5 seconds, however you have a bunch of users, instead of 5 seconds, then waiting for next one, process all at the exact same time and then send them back, each user gets the best possible experience 
}

// Simulate users web request
placeAnOrder(1)
placeAnOrder(2)
placeAnOrder(3)
placeAnOrder(4)
placeAnOrder(5)
placeAnOrder(6)
placeAnOrder(7)

/* we know that programs run top down and they print a millisecond after each other, then they hop down and they request from the database. That goes on and code isn't done yet
we can keep hopping down and down and deal with shit */ 
/* setTimeout you're scheduling it to run in 5 seconds, its instant, you say hey DB do your thing when you're done with that call me back, then you continue with the rest of the program, then when you're done
just call back this function, you aren't pausing you're setting a schedule. */ 