"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("UserGameHistories", "UserGameBiodatumId");
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("UserGameHistories", "UserGameBiodatumId");
  },
};
