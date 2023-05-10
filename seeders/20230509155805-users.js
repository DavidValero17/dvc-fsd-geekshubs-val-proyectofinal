"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "david",
          email: "david@david.com",
          password: "admin",
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "juan",
          email: "juan@juan.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ana",
          email: "ana@ana.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "luis",
          email: "luis@luis.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "carla",
          email: "carla@carla.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "pablo",
          email: "pablo@pablo.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "lucia",
          email: "lucia@lucia.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "maria",
          email: "maria@maria.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "rosa",
          email: "rosa@rosa.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "oscar",
          email: "oscar@oscar.com",
          password: "user",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
