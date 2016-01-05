/* Controller: index.js */

exports.home = function(req, res){
	console.log(settings);
	res.render('public/home', {title: 'Podst'});
};

exports.episode = function(req, res){
	res.render('public/episode', {title: req.params.episode});
};