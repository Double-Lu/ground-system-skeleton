var pg = require('pg'); // for PostgreSQL, should we decide to use it
var express = require('express'); // Wraps NodeJS typical server functions with easy API's, I'm just using app.get() and app.listen() for now

var app = express(); // Constructor for the express framework


/*

	Three basic routes we might define

*/


app.get('/', function(req, res){

	res.json({
		'message': 'Root route. Why are you requesting me? I am not a website'
	});

});

app.get('/command/:command', function(req, res){

	res.json({
		'message': 'in command route. You sent me this command: ' + req.params.command
	});

});




app.get('/data/:data', function(req, res){

	res.json({
		'message': 'In data route. You are requesting this data: ' + req.params.data
	});

});

app.listen(8080); // any port we want