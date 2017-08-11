require('dotenv').config();

function scaffoldEnv(app) {
    app.env = process.env;
}

module.exports = scaffoldEnv;
