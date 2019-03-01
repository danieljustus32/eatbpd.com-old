module.exports = function menuBuilder(meal, con) {
	this.meal = meal;
	this.con = con;
	this.query = con.query( {
	sql: 'SELECT DISTINCT MealCategory FROM ' + meal + ';' 
	}, 
	function(err, rows, fields) {
    if (err) {
      //Do not throw err as it will crash the server. 
      console.log(err.code);
    } else {
    	for(var i in rows) {
    		console.log(rows[i])
    	}
      //Do anything with the query result
    } 
	});
	this.build = function() {
		debugger;
		console.log(this.mealCategories);
		return [this.mealCategories];
	};
};
