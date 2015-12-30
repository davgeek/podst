/* routes.js */
// all routes are defined here.

exports = module.exports = function (app) {

    var settings = app.get('settings');

    app.get('/', function(req, res){
        res.render('public/home', {
            settings: settings
        });
    });

    app.get('/episode/:episode', function(req, res){
        res.render('public/episode', {
            settings: settings
        });
    });

	// 404 error handler
    app.all('*', function (req, res) {
        res.status(404);
        if (req.xhr) {
            res.send({error: 'Resource not found.'});
        }
        else {
            res.render('http/404', {title: 'Error 404'});
        }
    });

}