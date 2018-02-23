// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import routes from "./src/routes/demoRoute"

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require("./src/routes/demoRoute");

//allows to send obj/data thru our DB via http POST

const app = express();
const PORT = 3001;

//mongoose connection
//mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/demodb',{
//     //useMongoClient:true //not doing this gives err
// });

//mongoose.connect('mongodb://gia:mLabPassword1@ds145438.mlab.com:45438/restful-node-ex-emhenri',{
         //useMongoClient:true //not doing this gives err
    
 //});

 mongoose.Promise = global.Promise;
mongoose.connect('mongodb://giarocksfab:giarocksfab@ds145438.mlab.com:45438/restful-node-ex-emhenri'); 
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connection sucess");
});


//mongoose.connect('mongodb://gomobileuser:gomobile123@ds117148.mlab.com:17148/gomobile'); 
var db = mongoose.connection;
//mongodb://<dbuser>:<dbpassword>@ds145438.mlab.com:45438/restful-node-ex-emhenri

//body parser setup
app.use(bodyParser.urlencoded({extended:true}))
//setup json to work when u do the post request
app.use(bodyParser.json());
routes(app);

//serving static files
app.use(express.static('public'));


app.get('/',(req,resp)=>
resp.send(`Node and Express server are running on ${PORT}`)
)

app.listen(PORT, ()=>
    console.log(`Your server is running on ${PORT}`)
)