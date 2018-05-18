var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons = require('consolidate');
var csrf = require('csurf');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var path = require('path');
var rootApi=require('./src/rootAPI'); 

var app = express();

// view engine setup
app.engine('html',cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//var csrfProtection = csrf({ cookie: true });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(csrf({ cookie: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/appAPI',rootApi);
app.get('/main', function(req, res) {
  // res.sendFile( __dirname + "/views/" + "main.html" );
  console.log(req.csrfToken());
  res.render("main",{csrfToken: req.csrfToken() });
});
app.get('/survey', function(req, res) {
  res.sendFile( __dirname + "/views/" + "survey.html" );
});
app.get('/test', function(req, res) {
  res.sendFile( __dirname + "/views/" + "test.html" );
});




app.post('/post', function(req, res){
    res.send(req.body.test).end();
})

app.get('/csrftest', function(req, res){
    console.log(req.csrfToken());
    res.send('<form method="post" action="/post"><input type="text" name="test"><input type="submit"><input type="hidden" name="_csrf" value="'+req.csrfToken()+'">  </form>');
});
// app.get('/', function(req, res) {
//   res.redirect('/' + 'david');
// })
// app.use('/' + 'david', require(path.join(__dirname, 'src/rootAPI')));
// catch 404 and forward to error handler

// error handler


app.use(function(req, res, next) {
  next(createError(404));
});

// app.use(function (err, req, res, next) {
//   if (err.code !== 'EBADCSRFTOKEN') return next(err)

//   // handle CSRF token errors here
//   res.status(403)
//   res.send('form tampered with')
// })
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
