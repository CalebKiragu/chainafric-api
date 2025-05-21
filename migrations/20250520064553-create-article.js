"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      aId: {
        unique: true,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      source: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      translated: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      translations: {
        type: Sequelize.TEXT,
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      video: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.STRING,
      },
      original: {
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
    await queryInterface.dropTable("Articles");
  },
};
