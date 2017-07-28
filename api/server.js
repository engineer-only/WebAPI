var express = require('express');
var http = require('http');
var app = express();
var port = process.env.PORT || 8000;
var mongoose = require('mongoose');
var Rule = require('./api/schema/schema');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./api/route/routes');
var path = require('path');
var hbs = require('express-handlebars');

console.log("Port: ");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rules');

// view engine setup

var hbsEngine = hbs.create({
    helpers:
    {
        ifCond: function(v1, v2, options) {
          if(v1 === v2) {
            return options.fn(this);
          }
          return options.inverse(this);
        }
    },
    extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'
});

app.engine('hbs',hbsEngine.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(logger('dev'));
routes(app);
app.listen(port);


http.createServer(function (req, res)
{
    res.write('Hello World!');
    res.end();
}).listen(8080);



console.log('Rule API server started on: ' + port);






// -------------------------ERROR HANDLERS -------------------------
// 404: Not found
app.use(function(req, res)
{
    res.status(404).send({url: req.originalUrl + ' not found'});
});
// 500: Error reporting
app.use(function(err, req, res, next)
{
    console.error(err.stack);
    res.json(500, {ERROR: 'Internal server error.'} );
});
// -------------------------ERROR HANDLERS -------------------------
