var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/auth/', function(req, res, next) {
	res.cookie('user', req.params.username);
	res.redirect('/project/');
});

module.exports = router;
