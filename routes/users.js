var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.Survey.create({
    surveyname: req.body.surveyname
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:survey_id/destroy', function(req, res) {
  models.Survey.destroy({
    where: {
      id: req.params.survey_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:survey_id/questions/create', function (req, res) {
  models.Question.create({
    title: req.body.title,
    SurveyId: req.params.survey_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:survey_id/questions/:question_id/destroy', function (req, res) {
  models.Question.destroy({
    where: {
      id: req.params.question_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
