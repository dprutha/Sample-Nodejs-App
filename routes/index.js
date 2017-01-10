var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var walmart = require('walmart')('j2p8dzauh4a5eacjrm79pjpm');

Promise.promisifyAll(walmart);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/item',function(req, res, next){
        walmart.taxonomy().then(function(item){
            console.log(item);

           res.render('index', {
           	item : item,
			   title: 'Express'
           });
        }).catch(function(err){
            console.error("Error:" + err);
    });

});

router.get('/listAllCommits',  function(req, res, next) {

            		var GitHub = require('github-api');

        		// token auth
            		var gh = new GitHub({
        //token: 'Not needed for a public repository'
        });
		var repo = gh.getRepo('nodejs', 'node');
		console.log(repo);


		repo.listCommits()
	.then(function(commitsJson) {
			console.log(commitsJson);
			res.jsonp(commitsJson);
			});
});
module.exports = router;
