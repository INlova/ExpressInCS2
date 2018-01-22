var express = require('express');
var app = express();

app.get('/redirect', function(request, response){
    response.redirect(301, '/surprise');
   
});

app.listen(3000);
