const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//const cors = require('cors')

//Init App
const app = express();

//Init DB
const server = require('http').Server(app)
//const io = require('socket.io')(server)

mongoose.connect(
       "mongodb://admin2:admin2@ds213832.mlab.com:13832/banconode",

       {
         useNewUrlParser: true
       }
);

require('./src/models');

const Product = mongoose.model('Product');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);



// OR 


const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://<dbuser>:<dbpassword>@ds213832.mlab.com:13832/<nameBank>';
MongoClient.connect(url, (err,db) => {
    
if(!err){
    console.log('Conectado');
}  
}); 
