var models  = require('../models');
var express = require('express');
var Sequelize = require("sequelize");
var router  = express.Router();

router.get('/', function(req, res) {
  models.Survey.find({
    include: [{
      model: models.Question,
      order: Sequelize.fn('RAND'),
      limit: 1,
      include: [{
        limit: 10,
        model: models.Answer
      }],
    }]
  }).then(function(survey) {
    res.render('index', {
      title: 'Random Great Survey ',
      survey: survey
    });
  });
});

module.exports = router;
