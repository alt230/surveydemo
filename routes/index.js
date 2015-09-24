var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Survey.findAll({
    include: [ models.Question ]
  }).then(function(surveys) {
    res.render('index', {
      title: 'Express',
      surveys: surveys
    });
  });
});

module.exports = router;
