const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//const cors = require('cors')

//Iniciando o App
const app = express();

//Iniciando o DB
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