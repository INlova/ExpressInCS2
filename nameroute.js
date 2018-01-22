var express = require('express');
var app = express();

app.get('/name', function(request, response){
    response.send('Hello, @getmenova!');
   
});

app.listen(3000);
