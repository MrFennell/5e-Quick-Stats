const http = require('http');
const express= require('express');
const server = express();

server.set('view engine', 'pug');
server.set('views', './views');

server.get('/', function(req, res){
	res.render('index');
});

//allow other modules to use server
module.exports= server;