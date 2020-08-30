var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // handling cookies
var logger = require('morgan'); // logs info in the terminal

var indexRouter = require('./routes/index'); // set up routes for the application
var aboutRouter = require('./routes/about'); // code specific to routes should be placed in the routes

var app = express(); // initialize app to use express

// view engine setup
app.set('views', path.join(__dirname, 'views')); // sets up how the views are handled, and use ejs
app.set('view engine', 'ejs');

// sets up how data is logged and parsed, whenever the user requests a page using a path you use a certain middle ware. 
// catches 404 error and passes on to the next error handler, because it passes through the stack, thats why we use additional error handlers. 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// a local variable lets you use it anywhere in a program, you have a home page and an about page with a point system to display on every single page
// you can do that easily, within app.js under a line of code as long as its after app.

app.locals.points = "8,713"; // makes it local to the app, it pretty much means a global variable across the entire program. 
// app.locals.videodata = require('./video_data.json')

// use videodata in any of the templates which is a javascript object essentially
app.use('/', indexRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler -> figures out how to log the error during a server page, prints out the detailed stack trace to find the bug. 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development, now we understand what the files mean. 
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
