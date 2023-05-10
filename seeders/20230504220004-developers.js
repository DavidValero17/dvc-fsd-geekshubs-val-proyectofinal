'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Developers",
      [
        { name: "Ubisoft", description: "French video game company", year: 1986, createdAt: new Date(), updatedAt: new Date() },
        { name: "Rockstar Games", description: "American video game publisher", year: 1998, createdAt: new Date(), updatedAt: new Date() },
        { name: "Nintendo", description: "Japanese multinational video game company", year: 1889, createdAt: new Date(), updatedAt: new Date() },
        { name: "Electronic Arts", description: "American video game company", year: 1982, createdAt: new Date(), updatedAt: new Date() },
        { name: "Activision", description: "American video game publisher", year: 1979, createdAt: new Date(), updatedAt: new Date() },
        { name: "Square Enix", description: "Japanese video game company", year: 2003, createdAt: new Date(), updatedAt: new Date() },
        { name: "Valve Corporation", description: "American video game company", year: 1996, createdAt: new Date(), updatedAt: new Date() },
        { name: "Blizzard Entertainment", description: "American video game company", year: 1991, createdAt: new Date(), updatedAt: new Date() },
        { name: "Capcom", description: "Japanese video game company", year: 1979, createdAt: new Date(), updatedAt: new Date() },
        { name: "Sony Interactive Entertainment", description: "Japanese video game company", year: 1993, createdAt: new Date(), updatedAt: new Date() },
        { name: "Bethesda Game Studios", description: "American video game company", year: 1986, createdAt: new Date(), updatedAt: new Date() },
        { name: "Epic Games", description: "American video game company", year: 1991, createdAt: new Date(), updatedAt: new Date() },
        { name: "Bungie", description: "American video game company", year: 1991, createdAt: new Date(), updatedAt: new Date() },
        { name: "Gearbox Software", description: "American video game company", year: 1999, createdAt: new Date(), updatedAt: new Date() },
        { name: "CD Projekt Red", description: "Polish video game company", year: 2002, createdAt: new Date(), updatedAt: new Date() },
        { name: "2K Games", description: "American video game publisher", year: 2005, createdAt: new Date(), updatedAt: new Date() },
        { name: "Konami", description: "Japanese video game company", year: 1969, createdAt: new Date(), updatedAt: new Date() },
        { name: "BioWare", description: "Canadian video game company", year: 1995, createdAt: new Date(), updatedAt: new Date() },
        { name: "id Software", description: "American video game company", year: 1991, createdAt: new Date(), updatedAt: new Date() },
        { name: "FromSoftware", description: "Japanese video game company", year: 1986, createdAt: new Date(), updatedAt: new Date() }
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
  }
};
