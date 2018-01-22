var express = require('express');
var app = express();
//hello world
app.get('/', function(request, response){
    response.send('Hello WORLD!');
   
});

app.listen(3000);

//name 
app.get('/name', function(request, response){
    response.send('Hello, @getmenova!');
   
});

app.listen(3000);

//redirect

app.get('/redirect', function(request, response){
    response.redirect(301, '/surprise');
   
});

app.listen(3000);

// date

app.get('/date', function(request, response){
    response.send(new Date());
   
});

app.listen(3000);


//