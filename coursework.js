const express = require("express"); 
const http = require('http');
const app = express(); 
app.get ("/lessons", function(request, response) { 
    response.send(lessons =[
        {'topic': 'math','location':'hendon','price': 100},
        {'topic': 'math','location':'colindale','price': 80},
        {'topic': 'math','location':'brent cross','price': 90},
        {'topic': 'math','location':'golders green','price': 120},
    ]);
});

app.get ("/users", function(request, response) { 
    response.send({'email': 'user@email.com', 'password':'mypassword'});
});

http.createServer(app).listen(300); 