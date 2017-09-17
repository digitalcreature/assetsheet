var express = require('express');
var router = express.Router();

router.get('/:project_name', function(req, res, next) {
  res.render('editor', {
		'project': {
			'name': req.params.project_name,
			'colcount': 12,
			"rowcount": 8
		}
	});
});

module.exports = router;
