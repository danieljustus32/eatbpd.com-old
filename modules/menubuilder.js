module.exports = function menuBuilder(meal, con) {
	this.meal = meal;
	this.con = con;
	this.mealCategories = con.query('SELECT DISTINCT MealCategory FROM breakfast;', function(err, result) {
        if (err) throw err;
        console.log(result);
      });
	this.build = function() {
		return [this.mealCategories];
	} 
};

