var constants = require('constants'),
    express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    morgan = require('morgan'),
    errorhandler = require('errorhandler'),
    modRewrite = require('connect-modrewrite'),
    timeout = require('connect-timeout');

var config;

try {
    config = require('/etc/dashboard/conf/config');
}
catch(e) {
    config = require('../conf/config');
}

var logStream = fs.createWriteStream(config.log.stream, { flags: 'a' });

var app = express();

app.use(modRewrite([
        '^/api/(.*?)\\?(.*)$ ' + config.api.url + '$1?$2&api_key=' + config.api.key + ' [P]',
        '^/api/(.*)$ ' + config.api.url + '$1?api_key=' + config.api.key + ' [P]'
]));
app.use(express.static(config.files.static));
app.use(morgan('combined', {
      stream: logStream,
      skip: function (req, res) { return res.statusCode < 400 }
}));
app.use(errorhandler());
app.use(timeout(config.timeout));

if (app.get('env') === 'dev') {
    app.use(require('connect-livereload')({
        port: 35728,
        excludeList: ['.woff', '.flv']
    }));
} else {
    app.set('env', "production");
}

// Enable reverse proxy support in Express. This causes the
// the "X-Forwarded-Proto" header field to be trusted so its
// value can be used to determine the protocol. See
// http://expressjs.com/api#app-settings for more details.
app.enable('trust proxy');

// HTTP Server for redirection
var httpServer = http.createServer(app);
httpServer.listen(config.port);
