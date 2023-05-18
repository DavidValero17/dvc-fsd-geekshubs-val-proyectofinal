"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("VideogamePlatforms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      videogame_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Videogames",
          key: "id",
        },
      },
      platform_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Platforms",
          key: "id",
        },
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
    await queryInterface.dropTable("VideogamePlatforms");
  },
};
