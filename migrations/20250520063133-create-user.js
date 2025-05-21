"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uId: {
        unique: true,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      uName: {
        type: Sequelize.STRING,
      },
      fName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      pin: {
        type: Sequelize.STRING,
      },
      wallets: {
        type: Sequelize.TEXT,
      },
      profileImg: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birth: {
        type: Sequelize.DATE,
      },
      signup: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      thirdParty: {
        type: Sequelize.TEXT,
      },
      preferences: {
        type: Sequelize.TEXT,
      },
      banned: {
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
    await queryInterface.dropTable("Users");
  },
};
