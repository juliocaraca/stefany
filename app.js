var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/', indexRouter);
module.exports = app;
