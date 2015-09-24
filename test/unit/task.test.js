'use strict';

var expect = require('expect.js');

describe('models/task', function () {
  beforeEach(function () {
    this.Survey = require('../../models').Survey;
    this.Task = require('../../models').Task;
  });

  describe('create', function () {
    it('creates a task', function () {
      return this.Survey.create({ surveyname: 'johndoe' }).bind(this).then(function (survey) {
        return this.Task.create({ title: 'a title', SurveyId: survey.id }).then(function (task) {
          expect(task.title).to.equal('a title');
        });
      });
    });
  });
});
