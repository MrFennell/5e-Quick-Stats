var express = require('express');
var router = express.Router();

const models = require('../../models');

router.get('/', function(req, res){
    res.render('admin/welcome');
});
router.get('/newStat', async function(req, res){
    var stats = await models.Stat.findAll();
    res.render('admin/newStat', {stats});
});

router.post('/newStat', async function(req, res){
    const newAbility = req.body.newAbility;
    console.log("newAbility: "+newAbility);
    
    // const statCheck = await models.Stat.findAll({where: {StatName: newAbility}});
    // if (statCheck){
    //     const responseText = "Ability score already exists!";
    //     res.render('admin/newStat', {stats});
    // }else{
    //     const newStat = await models.Stat.create({where: {StatName: newAbility}});
    //     res.redirect('/admin/newStat');
    // }

    //delete two lines underneath later
    var stats = "stats";
    res.render('admin/newStat', {stats});
});

module.exports = router;