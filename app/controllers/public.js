/* Controller: index.js */

var config = require('../../config');

exports.home = function(req, res){
    res.render('home', {
        app: config
    });
};

exports.episodes = function(req, res){
	if (req.xhr) {
    	res.send({episodes: null});
    } else {
    	res.redirect('/');
    }
    
};

exports.episode = function(req, res){
    res.render('episode', {
        title: req.params.episode,
        app: config
    });
};