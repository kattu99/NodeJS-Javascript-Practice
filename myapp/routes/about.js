var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
      title: 'About', 
      name: 'Bucky'
    });
});

module.exports = router;

/* This allows you to make changes without making changes on every single page, lets you add a new view and a new route. */