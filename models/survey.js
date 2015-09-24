"use strict";

module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    surveyname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Survey.hasMany(models.Task)
      }
    }
  });

  return Survey;
};
