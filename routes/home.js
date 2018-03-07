var cookieSession = require('cookie-session');
module.exports = function(app){
    var home = app.controllers.home;
    app.use(cookieSession({
        name: 'session',
        secret: 'sarcofago',
        maxAge: 10000
      }));
    app.route('/teste').get(home.test);
    app.route('/').get(home.index);
    
}