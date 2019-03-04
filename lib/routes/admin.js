var express = require('express');
var router = express.Router();

const models = require('../../models');

router.get('/', function(req, res){
    res.render('admin/register');
});



//
module.exports= router;