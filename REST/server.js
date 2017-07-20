var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Rule = require('./api/schema/schema');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./api/route/routes');
var path = require('path');
var hbs = require('express-handlebars');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rules');
// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
routes(app);
app.listen(port);

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
