module.exports = function menuBuilder(meal, con) {
	this.meal = meal;
	this.con = con;
	var mealCategories = [];
	this.query = con.query( {
	sql: 'SELECT * FROM ' + meal + ';' 
	}, 
	function(err, result) {
    if (err) {
      //Do not throw err as it will crash the server. 
      console.log(err.code);
    } else {
    	for(var i in result) {
    		mealCategories.push(result[i]);

    	}
      //Do anything with the query result
      console.log(mealCategories);
    } 
	});
	this.build = function() {
		console.log(mealCategories)
		return mealCategories;
	};

};
