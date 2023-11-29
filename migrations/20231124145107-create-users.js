'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile_image: {
        type: Sequelize.TEXT("long"),
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
        
      },
      password: {
        type: Sequelize.TEXT("long")
      },
      email: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: true

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};