var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('project', {
		'project': {
			'colcount': 12,
			"rowcount": 8
		}
	});
});

module.exports = router;
