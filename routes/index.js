var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Survey.findAll({
    include: [ models.Question ]
  }).then(function(surveys) {
    res.render('index', {
      title: 'Admin > Survey ',
      surveys: surveys
    });
  });
});

module.exports = router;
