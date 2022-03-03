'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('UserGameHistories', 'gameID', {
      type: Sequelize.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('UserGameHistories', 'gameID', {
      type: Sequelize.INTEGER
    })
  }
};
