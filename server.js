const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongojs');
const db = mongodb('mySearchDb',['main']);
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/data',function (req,res) {
   db.main.find({},function (err,docs) {
       res.send(docs);
   })
});
app.post('/data',function (req,res) {
   var data = req.body.data;
   var reqData = new RegExp('.*'+data+'.*','g');
   db.main.find({name : reqData},function (err,docs) {
       res.send(docs);
   })
});

app.use(express.static(__dirname + "/public"));



app.listen(3000,function () {
    console.log('Listening to port 3000');
});