var models  = require('../models');
var express = require('express');
var Sequelize = require("sequelize");
var router  = express.Router();

router.get('/', function(req, res) {
  var shown_questions = [];
  // TODO
  var shown_questions = [12939];
  models.Survey.find({
    include: [{
      where: {
        id: {
          notIn: shown_questions
        }
      },
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
      title: 'Survey Time! ',
      survey: survey
    });
  });
});

module.exports = router;
