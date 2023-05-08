const { User, Videogame, Favorite, Developer } = require("../models");
// const jwt = require('jsonwebtoken');

const userController = {};

userController.getProfile = async (req, res) => {
  try {
    const user_id = req.user_id;
    const user = await User.findByPk(user_id, {
      attributes: { exclude: ["password", "role_id"] },
    });
    return res.json({
      success: true,
      message: "Here is the profile",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};

userController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      attributes: { exclude: ["password", "role_id"] },
    });
    return res.json({
      success: true,
      message: "Here are all the users",
      data: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.getAllVideogame = async (req, res) => {
  try {
    const allVideogame = await Videogame.findAll({
      attributes: { exclude: ["developer_id"] },
    });
    return res.json({
      success: true,
      message: "Here are all the videogames",
      data: allVideogame,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.getAllVideogameByGenre = async (req, res) => {
  try {
    const { genre } = req.body;
    const allVideogameByGenre = await Videogame.findAll({
      where: { genre: genre },
      attributes: { exclude: ["developer_id"] },
    });
    return res.json({
      success: true,
      message: `Here are all the videogames with genre ${genre}`,
      data: allVideogameByGenre,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.getAllVideogameByTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const allVideogameByTitle = await Videogame.findAll({
      where: { title: title },
      attributes: { exclude: ["developer_id"] },
    });
    return res.json({
      success: true,
      message: `Here are all the videogames with genre ${title}`,
      data: allVideogameByTitle,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.getAllVideogameByYear = async (req, res) => {
  try {
    const { year } = req.body;
    const allVideogameByYear = await Videogame.findAll({
      where: { year: year },
      attributes: { exclude: ["developer_id"] },
    });
    return res.json({
      success: true,
      message: `Here are all the videogames with genre ${year}`,
      data: allVideogameByYear,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.getAllVideogameByMultiplayer = async (req, res) => {
  try {
    const { multiplayer } = req.body;
    const allVideogameByMultiplayer = await Videogame.findAll({
      where: { multiplayer: multiplayer },
      attributes: { exclude: ["developer_id"] },
    });
    return res.json({
      success: true,
      message: `Here are all the videogames with genre ${multiplayer}`,
      data: allVideogameByMultiplayer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.getAllVideogameByOnline = async (req, res) => {
  try {
    const { online } = req.body;
    const allVideogameByOnline = await Videogame.findAll({
      where: { online: online },
      attributes: { exclude: ["developer_id"] },
    });
    return res.json({
      success: true,
      message: `Here are all the videogames with genre ${online}`,
      data: allVideogameByOnline,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.getAllVideogameByDeveloper = async (req, res) => {
    try {
      const { developerName } = req.body;
  
      const allVideogameByDeveloper = await Videogame.findAll({
        where: {},
        include: [
          {
            model: Developer,
            where: { name: developerName }
          }
        ],
        attributes: { exclude: ["developer_id"] }
      });
  
      return res.json({
        success: true,
        message: `Here are all the videogames by developer ${developerName}`,
        data: allVideogameByDeveloper
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message
      });
    }
  };

userController.addVideogame = async (req, res) => {
  try {
    const {
      title,
      image,
      description,
      genre,
      year,
      multiplayer,
      online,
      developer_id,
    } = req.body;
    const newVideogame = await Videogame.create({
      title: title,
      image: image,
      description: description,
      genre: genre,
      year: year,
      multiplayer: multiplayer,
      online: online,
      developer_id: developer_id,
    });

    return res.json({
      success: true,
      message: "Videogame added",
      data: newVideogame,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};

userController.updateVideogame = async (req, res) => {
  try {
    const videogame_id = req.params.id;
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const genre = req.body.genre;
    const year = req.body.year;
    const multiplayer = req.body.multiplayer;
    const online = req.body.online;
    const developer_id = req.body.developer_id;

    const updateVideogame = await Videogame.update(
      {
        title: title,
        image: image,
        description: description,
        genre: genre,
        year: year,
        multiplayer: multiplayer,
        online: online,
        developer_id: developer_id,
      },
      { where: { id: videogame_id } }
    );

    return res.json({
      success: true,
      message: "Videogame updated",
      data: updateVideogame,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};

userController.addToFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = userController;
