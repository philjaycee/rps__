'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('UserGameHistories', {
      fields: ['gameID'],
      type: 'foreign key',
      name: 'gamelist_history_association',
      references: {
        table: 'GameLists',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('UserGameHistories', {
      fields: ['gameID'],
      type: 'foreign key',
      name: 'gamelist_history_association',
      references: {
        table: 'GameLists',
        field: 'id'
      }
    });
  }
};
