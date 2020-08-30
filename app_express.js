/* Express is a web framework that lets us use alot of functionality out of the box, also the folder set up is done in express */ 

/* 
idea -> intellij settings
bin/www -> gets yuor project up and running, its the start up script that kicks off app.js, its a start up script with some base settings and you have 
a core behind your project, the node modules are the modules in addition to the core modules. 
express -> download a bunch in addition that go in the node_modules directory. 
public -> files the user can access, js, stylesheets, anything for public not related to your server files. 
routes -> brains behind each page, lets you set it up and gives you two pages by default. 
whenever you make a project you have a bunch of pages with it's own route file that explains what a route is, the brains behind each page, the view or html for each page, 
the index has html, head, body and it gives you difference between jade and JS, you can include with symbols, jade looks like a bunch of words. In you
EJS files you have plain html, you can include anything in addition. 

app.js figures out how to handle response appropriately, and you have another page, how to request a user page, then you have a users route, you just call the users
object. The users and routes are other files. Users require middleware. If you go to the index it calls a different script, all the file does is send out respond with a resource. 

  <!-- The <%= =%> allows you to insert java script into the file and displays the title in the heading, anytime you want to use a variable you
  use a less than % equal sign and just insert it in. You just don't add the equal sign, you just write plain javascript, whenever you get the home page
  you can use the EJS views instead of jade you know the file extensions, whenever you request homepage use the index.ejs and you can pass in additional information and the variable is equal to express
  It's basically just a template that you can use. 
  If you pass in your name as Bucky, any time you use name you can display Bucky, which would show. 
  HTML you can just throw javascript into. 
-->

In an ejs file you can also loop through things very easily using videodata.categories.forEach(function(item) {
    <li><%= item.categoryName %></li>
})

Don't have to convert json data because already an object.

How to pass json data through routes. We learnt that we can take a file or reference and store inside a variable inside a reference, but we're writing code
specific to one specific page and using that to manage the entire application. 
*/