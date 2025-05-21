"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Wallets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      wId: {
        unique: true,
        type: Sequelize.STRING,
      },
      uId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      chain: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      network: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      provider: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dateAdded: {
        type: Sequelize.DATE,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      currency: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      subscribed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      metadata: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("Wallets");
  },
};
