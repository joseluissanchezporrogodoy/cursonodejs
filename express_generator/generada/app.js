var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();
require('./lib/connectMongoose');
require('./models/Agente');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res,next) {
    console.log('middleware de app');
    //next({status:500, message:'imposible continuar'});
    next();
});
app.use('/',       require('./routes/index'));

app.use('/cliente',require('./routes/cliente'));

app.use('/apiv1/agentes',require('./routes/apiv1/agentes'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if(isAPI(req)){
    res.json({ok: false, error:err.message});
    return;
  }
  res.render('error');
});

module.exports = app;


// para devolver errores en JSON
function isAPI(req) {

    return req.originalUrl.indexOf('/api') === 0;
}