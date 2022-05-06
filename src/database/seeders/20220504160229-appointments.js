module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    'appointments',
    [
      {
        title: 'Estudar',
        time: '2022-05-04T23:00:00Z',
        description: 'Estudar Node',
      },
      {
        title: 'Trabalhar',
        time: '2022-05-04T23:00:00Z',
        description: 'Estudar React',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('appointments', null, {}),
};
