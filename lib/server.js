var bodyParser = require('body-parser');
const http = require('http');
const express= require('express');
const server = express();

server.set('view engine', 'pug');
server.set('views', './views');

server.use(bodyParser.urlencoded({ extended: true }));

//var models = require(../models);
server.get('/', function(req, res){
	res.render('index');
});

server.use('/admin', require('./routes/admin'));

//allow other modules to use server
module.exports= server;