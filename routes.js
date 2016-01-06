/* routes.js */
// all routes are defined here.

exports = module.exports = function (app) {

    var adminController = require('./app/controllers/admin');
    var publicController = require('./app/controllers/public');
    
    // admin routes
    app.get('/admin', adminController.home);
    app.get('/admin/new', adminController.create);

    // public routes
    app.get('/', publicController.home);
    app.get('/episodes', publicController.episodes);
    app.get('/:episode', publicController.episode);

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