'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('appointments');
  }
};
