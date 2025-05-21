"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Logs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lId: {
        unique: true,
        type: Sequelize.STRING,
      },
      uId: {
        type: Sequelize.STRING,
      },
      wId: {
        type: Sequelize.STRING,
      },
      aId: {
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      event: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ip: {
        type: Sequelize.STRING,
      },
      detail: {
        type: Sequelize.TEXT,
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Logs");
  },
};
