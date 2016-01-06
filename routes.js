/* routes.js */
// all routes are defined here.

exports = module.exports = function (app) {

    var config = app.get('config');

    app.get('/', function(req, res){
        res.render('home', {
            app: config
        });
    });

    app.get('/episode/:episode', function(req, res){
        res.render('episode', {
            title: 'hola mundo',
            app: config
        });
    });

    app.get('/admin', function(req, res){
        res.render('admin/home');
    });

	// 404 error handler
    app.all('*', function (req, res) {
        res.status(404);
        if (req.xhr) {
            res.send({error: 'Resource not found.'});
        }
        else {
            res.render('404', {title: 'Error 404'});
        }
    });

}