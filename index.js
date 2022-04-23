const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
const { exec } = require('child_process');

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/epilog', function(req, res) {
    res.render('epilogo');
});

app.get('/principal', function(req, res) {
    res.render('principal');
});

app.listen(8080);
console.log('porta 8080');