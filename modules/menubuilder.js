module.exports = function menuBuilder(meal, con) {
	this.meal = meal;
	this.con = con;
	var menu = [];
	this.build = () => con.query( {
	sql: 'SELECT * FROM ' + meal + ';' 
	}, 
	function(err, result) {
    if (err) {
      //Do not throw err as it will crash the server. 
    	console.log(err.code);
    } else {
    	for(var i in result) {
    		menu.push(result[i]);
    	}
      //Do anything with the query result
      	 
      	  return menu;
    } 
	});
};
