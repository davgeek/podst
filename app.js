/* app.js */

var config = require('./config');
var path = require('path');
var fs = require('fs');
var express = require('express');

var assets_dir = '/themes/' + config.theme + '/assets/';
var views_dir = '/themes/' + config.theme + '/';

var app = express();
app.set('port', config.port);
app.set('view engine', 'jade');
app.set('views', [ path.join(__dirname, views_dir), path.join(__dirname, '/app/views/') ]);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, assets_dir)));

// setup routes
require('./routes')(app);

app.listen(app.get('port'), function(){
	console.log('Podst running on ' + app.get('port'));
});
