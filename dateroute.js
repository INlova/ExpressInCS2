var express = require('express');
var app = express();

app.get('/date', function(request, response){
    response.send(new Date());
   
});

app.listen(3000);
