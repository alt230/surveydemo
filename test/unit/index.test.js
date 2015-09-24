'use strict';

var expect = require('expect.js');

describe('models/index', function () {
  it('returns the question model', function () {
    var models = require('../../models');
    expect(models.Question).to.be.ok();
  });

  it('returns the survey model', function () {
    var models = require('../../models');
    expect(models.Survey).to.be.ok();
  });
});
