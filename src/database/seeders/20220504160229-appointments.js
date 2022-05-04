'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('appointments',
    [
      {
        title: 'Estudar',
        time: Date.now(),
        description: 'Estudar Node',
      },
      {
        title: 'Trabalhar',
        time: Date.now(),
        description: 'Estudar React'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('appointments', null, {}),
};