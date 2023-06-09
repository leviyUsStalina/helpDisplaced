var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');


var indexRouter = require('./routes/index');
var countriesRouter = require('./routes/countries');
var app = express();

// view engine setup
app.set('view', path.join(__dirname, 'views'));

app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use('/', indexRouter);
app.use('/countries', countriesRouter);
app.engine('html', nunjucks.render)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
