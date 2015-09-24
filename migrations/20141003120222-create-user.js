"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable('Surveys', {
        surveyname: DataTypes.STRING
      })
      .complete(done)
  },

  down: function(migration, DataTypes, done) {
    migration
      .dropTable('Surveys')
      .complete(done)
  }
};
