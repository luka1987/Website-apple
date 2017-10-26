var express = require("express");
var app = express();

var serveStatic = require('serve-static');

app.use(serveStatic('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Yelp Camp server has started!!!')
});
