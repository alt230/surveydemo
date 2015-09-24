"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable('Questions', {
        title: DataTypes.STRING
      })
      .complete(done)
  },

  down: function(migration, DataTypes, done) {
    migration
      .dropTable('Questions')
      .complete(done)
  }
};
