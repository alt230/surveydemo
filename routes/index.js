var models  = require('../models');
var express = require('express');
var Sequelize = require("sequelize");
var router  = express.Router();

router.get('/', function(req, res) {

  // TODO
  var shown_questions;
  if (req.cookies['shown_questions']) {
    shown_questions = JSON.parse(req.cookies['shown_questions']);
  }
  if (shown_questions.length == 0) {
    shown_questions = [999];
  }

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
