module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        username: 'Anderson Silva',
        email: 'asilva@gmail.com',
        password: '123456',
      },
      {
        id: 2,
        username: 'José Aldo',
        email: 'aldo@gmail.com',
        password: '123456',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
