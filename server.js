var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/',(req,res) =>{
    res.json({"message":"welcome to app"});
})
app.listen(8082, () =>{
    console.log('server is running');

});