'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    title: DataTypes.STRING,
    picked: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Answer.belongsTo(models.Question)
      }
    }
  });
  return Answer;
};
