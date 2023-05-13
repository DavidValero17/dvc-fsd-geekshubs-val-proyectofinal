const bcrypt = require('bcrypt');
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
          password:bcrypt.hashSync("admin", 10),
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "juan",
          email: "juan@juan.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ana",
          email: "ana@ana.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "luis",
          email: "luis@luis.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "carla",
          email: "carla@carla.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "pablo",
          email: "pablo@pablo.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "lucia",
          email: "lucia@lucia.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "maria",
          email: "maria@maria.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "rosa",
          email: "rosa@rosa.com",
          password:bcrypt.hashSync("user", 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "oscar",
          email: "oscar@oscar.com",
          password:bcrypt.hashSync("user", 10),
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
