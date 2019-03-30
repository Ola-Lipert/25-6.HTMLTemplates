var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/login', function(req, res){
    res.render('login', {
        title: 'Google login page',
        ur: '/auth/google'
    });
});

app.get('/auth/google', function(req, res){
    res.render('logged', {
        first_name: req.query.first_name,
        last_name: req.query.laast_name
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

