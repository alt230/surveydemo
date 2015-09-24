'use strict';

var expect = require('expect.js');

describe('models/question', function () {
  beforeEach(function () {
    this.Survey = require('../../models').Survey;
    this.Question = require('../../models').Question;
  });

  describe('create', function () {
    it('creates a question', function () {
      return this.Survey.create({ surveyname: 'johndoe' }).bind(this).then(function (survey) {
        return this.Question.create({ title: 'a title', SurveyId: survey.id }).then(function (question) {
          expect(question.title).to.equal('a title');
        });
      });
    });
  });
});
