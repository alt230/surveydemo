"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Question.belongsTo(models.Survey, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        Question.hasMany(models.Answer);
      }
    }
  });

  return Question;
};
