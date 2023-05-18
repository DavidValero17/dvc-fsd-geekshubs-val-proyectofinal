const { Op } = require("sequelize");

const { User, Videogame, Favorite } = require("../models");
const jwt = require("jsonwebtoken");

const userController = {};

userController.getProfile = async (req, res) => {
  try {
    const user_id = req.user_id;
    const user = await User.findByPk(user_id, {
      attributes: { exclude: ["password", "role_id"] },
      include: [
        {
          model: Favorite,
          as: "favorites",
          include: {
            model: Videogame,
            attributes: ["title", "image", "description", "genre", "year"],
          },
        },
      ],
    });

    return res.json({
      success: true,
      message: "Here is the profile",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
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

userController.updateUser = async (req, res) => {
  try {
    const { user_id, username } = req.body;

    const updateUser = await User.update(
      {
        username: username,
      },
      { where: { id: user_id } }
    );

    return res.json({
      success: true,
      message: "User updated",
      data: updateUser,
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
    let options = { where: {} };
    const { genre, title, year, multiplayer, online, developer } = req.query;

    if (genre) {
      options.where.genre = { [Op.like]: `%${genre}%` };
    }

    if (title) {
      options.where.title = { [Op.like]: `%${title}%` };
    }

    if (year) {
      options.where.year = { [Op.like]: `%${year}%` };
    }

    if (multiplayer) {
      options.where.multiplayer = multiplayer === "true";
    }

    if (online) {
      options.where.online = online === "true";
    }

    if (developer) {
      options.where.developer = developer;
    }

    const allVideogame = await Videogame.findAll({
      attributes: { exclude: ["developer_id"] },
      where: options.where,
    });

    return res.json({
      success: true,
      message: "Here are the filtered videogames",
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

userController.getVideogameById = async (req, res) => {
  try {
    const videogame_id = req.params.id;
    const videogameById = await Videogame.findByPk(videogame_id, {
      where: { id: videogame_id },
    });

    return res.json({
      success: true,
      message: "Here is your videogame",
      data: videogameById,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error.message,
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
    const {
      videogame_id,
      title,
      image,
      description,
      genre,
      year,
      multiplayer,
      online,
      developer_id,
    } = req.body;

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
      message: "Something went wrong",
      error: error.message,
    });
  }
};

userController.addFavorite = async (req, res) => {
  try {
    const { videogame_id } = req.body;
    const user_id = req.user_id;

    if (!user_id) {
      return res.status(400).json({
        success: false,
        message: "User ID is missing",
      });
    }

    const favoriteExists = await Favorite.findOne({
      where: {
        user_id,
        videogame_id,
      },
    });

    if (favoriteExists) {
      return res.status(409).json({
        success: false,
        message: "The videogame is already in favorites",
      });
    }

    const videogame = await Videogame.findByPk(videogame_id);
    if (!videogame) {
      return res.status(404).json({
        success: false,
        message: "The videogame does not exist",
      });
    }

    const newFavorite = await Favorite.create({
      user_id,
      videogame_id,
    });

    return res.json({
      success: true,
      message: "Videogame added to favorites",
      data: newFavorite,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = userController;
