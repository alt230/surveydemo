'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('survey creation page', function () {
  beforeEach(function () {
    this.models = require('../../models');

    return Bluebird.all([
      this.models.Task.destroy({ truncate: true }),
      this.models.Survey.destroy({ truncate: true })
    ]);
  });

  it('loads correctly', function (done) {
    request(app).get('/').expect(200, done);
  });

  it('lists a survey if there is one', function (done) {
    this.models.Survey.create({ surveyname: 'johndoe' }).then(function () {
      request(app).get('/').expect(/johndoe/, done);
    })
  });

  it('lists the tickets for the survey if available', function (done) {
    this.models.Survey.create({ surveyname: 'johndoe' }).bind(this).then(function (survey) {
      return this.models.Task.create({ title: 'johndoe task', SurveyId: survey.id });
    }).then(function () {
      request(app).get('/').expect(/johndoe task/, done);
    });
  });
});
