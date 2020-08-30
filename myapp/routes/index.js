var express = require('express');
var router = express.Router();
var vd = require('../videodata.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rahul', name:"dude", videodata: vd});
});
// we use video data in our template and its equal to that object.
module.exports = router;
