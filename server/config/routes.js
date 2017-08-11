const appRoutes = require('./../routes/app');

function scaffoldRoutes(app) {
    app.use('/', appRoutes(app));
}

module.exports = scaffoldRoutes;
