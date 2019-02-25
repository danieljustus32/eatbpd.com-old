const credentials = require('../config/credentials.js');

var express = require('express');
var router = express.Router();
var api = credentials.api;

// GET home page. //
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/menu', function(req, res, next) {
  res.render('menu');
});

router.get('/hours', function(req, res, next) {
	res.render('hours', { key: api });
})

module.exports = router;
