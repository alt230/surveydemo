'use strict';
module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define('Survey', {
    surveyname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Survey.hasMany(models.Question)
      }
    }
  });
  return Survey;
};
