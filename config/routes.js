var users       = require('../app/controllers/users'),
    controllers = require('../app/controllers/index');

exports.init = function(app, passport) {
  console.log('Initializing Routes...');

  app.get('/', controllers.index);
  app.get('/login', users.login);
  app.post('/login', passport.authenticate('ldapauth', { successRedirect: '/', failureRedirect: '/login' }));

  // REST API
  app.all('/api/*', function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.send(401, 'User is not authorized');
    }
    next();
  });
};
