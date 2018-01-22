var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello WORLD!');
   
});

app.listen(3000);

/*Create an express app.
Create a root route that returns “Hello World”
Create a ‘/name’ route that returns your name
Create a /redirect route that sends you to /surprise with a moved permanently status code -- response.redirect(301, ‘/parts’)
Create a route that returns the current date. You will need to look up how to get the current date.
*/