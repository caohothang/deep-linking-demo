'use strict';

var express = require('express');
var app = express();

app.use(express.static('./public'));
app.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

app.listen(8080, function() {
  console.log('http://localhost:8080');
});
