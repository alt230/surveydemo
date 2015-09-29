var models  = require('../models');
var express = require('express');
var Sequelize = require("sequelize");
var router  = express.Router();

router.get('/', function(req, res) {
  models.Survey.find({
    limit: 1,
    order: Sequelize.fn('RAND'),
    include: [{
      model: models.Question,
      include: [models.Answer],
    }]
  }).then(function(survey) {
    res.render('index', {
      title: 'Random Great Survey ',
      survey: survey
    });
  });
});

module.exports = router;
