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

router.post('/:survey_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    SurveyId: req.params.survey_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:survey_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
