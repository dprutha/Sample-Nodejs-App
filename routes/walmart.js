/**
 * Created by Prutha on 1/10/2017.
 */

var express = require('express');
var walmartdata = require('./walmartdata');
var router = express.Router();
var walmart = require('walmart')('j2p8dzauh4a5eacjrm79pjpm');
router.get('/getTaxonomy',walmartdata.taxonomy);
router.get('/item',function(req, res, next){
    walmart.taxonomy().then(function(item){
        console.log(item);

        res.render('walmart', {
            item : item,
            title: 'Express'
        });
    }).catch(function(err){
        console.error("Error:" + err);
    });

});

module.exports = router;