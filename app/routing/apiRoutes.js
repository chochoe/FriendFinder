// API routing code
module.exports = function (app) {
	var path = require('path');
	var friends = require('../data/friends.js');
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});
	app.post('/api/friends', function (req, res) {
		var totalDifference = [];
    	for (var i = 0; i < friends.length; i++){
    		var match = friends[i].scores;
    		for (var j = 0; j < match.length; j++) {
    			var difference = 0;
    			difference += Math.abs(req.body.scores[j] - match[j]);
    		}
        	totalDifference.push(difference);
        };
        var index = 0;
		var value = totalDifference[0];
		function lowestIndex (arr) {
			for (var i = 1; i < arr.length; i++) {
	  			if (arr[i] < value) {
	    			value = arr[i];
	    			index = i;
	  			}
			};
			return index;
		};
		var myMatch = friends[lowestIndex(totalDifference)];
		res.send(myMatch);
	});
};