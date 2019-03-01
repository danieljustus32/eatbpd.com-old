const credentials = require('../config/credentials.js');

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
  res.render(req.params.meal, { meal: req.params.meal});
});

router.get('/hours', function(req, res, next) {
	res.render('hours', { key: api });
})

module.exports = router;
