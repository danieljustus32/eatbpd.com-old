const credentials = require('../config/credentials.js');
var menuBuilder = require('../modules/menubuilder.js');

var express = require('express');
var router = express.Router();
var api = credentials.api;

// GET home page. //
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/menu/:meal', function(req, res, next) {
  var db = req.con;
  console.log(db);
  var menu = new menuBuilder(req.params.meal, db);
  menu.build();
  // we want to be able to just call predefined middleware here,
  // something like makemeal(req.params.meal)
  res.render('menu', { meal: req.params.meal});
});

router.get('/hours', function(req, res, next) {
	res.render('hours', { key: api });
})

module.exports = router;
