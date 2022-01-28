const express = require("express"); 
const http = require('http');
const app = express(); 
const port=3000
const courses =[
    {'topic': 'math','location':'hendon','price': 100,},
    {'topic': 'math','location':'Colindale','price': 80},
    {'topic': 'math','location':'brent cross','price': 90},
    {'topic': 'math','location':'golders green','price': 120},
];

app.get("/users",(req, res) =>{
    res.status(200).json({'email':'user@gmail.com', 'password':'mypassword'})
})
app.get("/lessons",(req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(JSON.stringify(courses));
})
.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })


 
