"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Videogames",
      [
        {
          title: "The Legend of Zelda: Breath of the Wild",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
          description:
            "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo. It is the 19th release in The Legend of Zelda series, and is set in a large, open-world environment where the player character, Link, can explore and interact with various objects and non-player characters.",
          genre: "Action-adventure",
          year: "2017",
          multiplayer: false,
          online: false,
          developer_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Overwatch",
          image:
            "https://m.media-amazon.com/images/M/MV5BYjBkNTJkOWUtNTg1ZS00NGZhLWIxMGUtOWE0ZDA0NzRkODM3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
          description:
            "Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Players choose from a roster of heroes, each with their own unique abilities and playstyles, and work together to complete objectives and defeat the opposing team.",
          genre: "First-person shooter",
          year: "2016",
          multiplayer: true,
          online: true,
          developer_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Minecraft",
          image:
            "https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png",
          description:
            "Minecraft is a sandbox video game developed and published by Mojang Studios. In the game, players explore a blocky 3D world, gathering resources and using them to build structures and tools. Minecraft has a survival mode where players must fend off monsters and manage hunger, and a creative mode where they have unlimited resources to build whatever they want.",
          genre: "Sandbox",
          year: "2011",
          multiplayer: true,
          online: true,
          developer_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cuphead",
          image:
            "https://image.api.playstation.com/vulcan/img/cfn/11307fd0s0uyV-ba4dy5E9qskf6CIntl28sAerYTFbYC7vPUBrfgp7zokliHVbVoJ5ghylOBamo2Q2i5pbEYxQKFnSsiLHaY.png",
          description:
            "Cuphead is a run and gun video game developed and published by StudioMDHR. The game is heavily inspired by 1930s cartoons and features hand-drawn animation and jazz music. Players control Cuphead, a character with a cup for a head, and must battle their way through various levels and bosses.",
          genre: "Run and gun",
          year: "2017",
          multiplayer: true,
          online: true,
          developer_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Doom Eternal",
          image:
            "https://images.ctfassets.net/rporu91m20dc/48FOwmEHJwz03qpd42nzwr/4f08db516cdcd51dc44d3c0474484b3b/doom_eternal_bg_date_m_w_launch.jpg?q=70",
          description:
            "Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks.",
          genre: "first-person shooter",
          year: "2020",
          multiplayer: true,
          online: true,
          developer_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Stardew Valley",
          image:
            "https://i.3djuegos.com/juegos/12908/stardew_valley/fotos/ficha/stardew_valley-3324716.jpg",
          description:
            "Stardew Valley is a farming simulation game developed by ConcernedApe and published by Chucklefish.",
          genre: "simulation",
          year: "2016",
          multiplayer: false,
          online: false,
          developer_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Animal Crossing: New Horizons",
          image:
            "https://assets.nintendo.eu/image/upload/f_auto/q_auto/t_product_tile_desktop/v1/MNS/NOE/70010000027620/1.1_2000x2000_ProductTile_Switch_AnimalCrossingNewHorizons_KeyVisual_enGB_v1_100q?_a=ATAK9AA0",
          description:
            "Animal Crossing: New Horizons is a life simulation game developed and published by Nintendo.",
          genre: "simulation",
          year: "2020",
          multiplayer: true,
          online: true,
          developer_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Gris",
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202210/2621/erwvzuQhwWYIg8EJYkxawE8a.png",
          description:
            "Gris is a platformer game developed by Nomada Studio and published by Devolver Digital.",
          genre: "platformer",
          year: "2018",
          multiplayer: false,
          online: false,
          developer_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Firewatch",
          image:
            "https://image.api.playstation.com/cdn/EP0144/CUSA04118_00/ggQdzcbimtqao8aHOHFowA8MPW9c6m9k.png",
          description:
            "Firewatch is a single-player first-person mystery set in the Wyoming wilderness.",
          genre: "Adventure",
          year: "2016",
          multiplayer: false,
          online: false,
          developer_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "The Witcher 3: Wild Hunt",
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
          description:
            "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe.",
          genre: "RPG",
          year: "2015",
          multiplayer: false,
          online: false,
          developer_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Death Stranding",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Death_Stranding.jpg/220px-Death_Stranding.jpg",
          description:
            "From legendary game creator Hideo Kojima comes an all-new, genre-defying experience.",
          genre: "Action",
          year: "2019",
          multiplayer: false,
          online: false,
          developer_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dark Souls III",
          image:
            "https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png",
          description:
            "Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment.",
          genre: "Action role-playing",
          year: "2016",
          multiplayer: true,
          online: true,
          developer_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sekiro: Shadows Die Twice",
          image:
            "https://swapcloudgames.com/cdn/shop/products/cc735352db842232a33b3d1edd26f8f6.png?v=1621279377",
          description:
            "Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision.",
          genre: "Action-adventure",
          year: "2019",
          multiplayer: false,
          online: false,
          developer_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "BioShock Infinite",
          image: "https://image.api.playstation.com/vulcan/img/cfn/11307sTZ0IfHm2mu2m-Bv67cCZdanpm3BrdhlSEdrfCM_Lk4_LU8iLKiFXzeca0FX_xWI8YQTxGjcbyQjPENYMTj7gE6a0kt.png",
          description:
            "BioShock Infinite is a first-person shooter video game developed by Irrational Games and published by 2K Games. It was released worldwide for the Microsoft Windows, PlayStation 3, Xbox 360, and OS X platforms in 2013, and a Linux port was released in 2015.",
          genre: "FPS",
          year: "2013",
          multiplayer: false,
          online: false,
          developer_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Final Fantasy VII",
          image: "https://media.vandal.net/m/1436/final-fantasy-vii-20161062139_1.jpg",
          description:
            "Final Fantasy VII is a role-playing video game developed by Square Enix. It is the seventh main installment in the Final Fantasy series. Set in the dystopian cyberpunk metropolis of Midgar, players control mercenary Cloud Strife as he and an eco-terrorist group known as AVALANCHE oppose a megacorporation called Shinra from using the planet's life essence as an energy source. The gameplay features exploration, puzzle-solving, and turn-based battle elements.",
          genre: "RPG",
          year: "1997",
          multiplayer: false,
          online: false,
          developer_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Subnautica",
          image:
            "https://image.api.playstation.com/vulcan/img/rnd/202009/3006/C76j3lYg8BNBWJRSYtI2ONbo.png",
          description:
            "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.",
          genre: "Survival, Adventure",
          year: "2018",
          multiplayer: false,
          online: false,
          developer_id: 1,
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
