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
  var con = req.con;
  var meal = req.params.meal;
  // we want to be able to just call predefined middleware here,
  // something like makemeal(req.params.meal)
  con.query( {
	sql: 'SELECT * FROM ' + meal 
	},  
	function(err, result) {
    if (err) {
      //Do not throw err as it will crash the server. 

    	console.log(err.code);
    } else {
    	var menu = [];
      var categories = [];
      var mealsByCategory = [];
    	for(var i in result) {
    		menu.push(result[i])
    	}
      for (var i in menu) {
        var category = menu[i].MealCategory;
        if (!categories.includes(category)) {
          categories.push(category)
        
        } else {
          mealsByCategory.splice(0,mealsByCategory.length)
          mealsByCategory.push(menu[i])
        }
      }
    	res.render('menu', { meal: req.params.meal, menu: menu, categories: categories});
    } 
	});
});

router.get('/hours', function(req, res, next) {
	res.render('hours', { key: api });
})

module.exports = router;
