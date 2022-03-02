'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('UserGameHistories', 'UserGameBiodatumId', {
      type: Sequelize.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('UserGameHistories', 'UserGameBiodatumId', {
      type: Sequelize.INTEGER
    })
  }
};
