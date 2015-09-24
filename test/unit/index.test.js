'use strict';

var expect = require('expect.js');

describe('models/index', function () {
  it('returns the task model', function () {
    var models = require('../../models');
    expect(models.Task).to.be.ok();
  });

  it('returns the survey model', function () {
    var models = require('../../models');
    expect(models.Survey).to.be.ok();
  });
});
