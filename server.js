// required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// using express
var app = express();
var PORT = process.env.PORT || 3309;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// setting routes
htmlRoutes(app);
apiRoutes(app);

app.use(express.static('app/public'));

// port listener
app.listen(PORT, function() {
	console.log("Server listening on port " + PORT + ".");
});
