'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('UserGameHistories', {
      fields: ['userID'],
      type: 'foreign key',
      name: 'biodata_history_association',
      references: {
        table: 'UserGameBiodata',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('UserGameHistories', {
      fields: ['userID'],
      type: 'foreign key',
      name: 'biodata_history_association',
      references: {
        table: 'UserGameBiodata',
        field: 'id'
      }
    });
  }
};
