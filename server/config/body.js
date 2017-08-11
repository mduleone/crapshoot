const bodyParser = require('body-parser');


function scaffoldBody(app) {
    app.use(function(req, res, next) {
        // allow cors
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = scaffoldBody;
