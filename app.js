
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/main.js')
  , http = require('http')
  , path = require('path');

var app = module.exports = express();

// all environments
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(app.router);
});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(req,res){
  console.log('Express server listening on port ' + app.get('port'));
});
