/* app.js */

var config = require('./config');
var path = require('path');
var fs = require('fs');
var express = require('express');
var settings = require("./settings.json");

var app = express();
app.set('settings', settings);
app.set('port', config.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// setup routes
require('./routes')(app);

app.listen(app.get('port'), function(){
	console.log('Podst running on ' + app.get('port'));
});