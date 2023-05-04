const { User, Videogame } = require("../models");

const userController = {};

userController.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll({
            attributes: { exclude: ["password", "role_id"] }
        });
        return res.json({
            success: true,
            message: "Here are all the users",
            data: allUsers
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
        const { title, image, description, genre, year, multiplayer, online, developer_id } = req.body;
        const newVideogame = await Videogame.create(
            {
                title: title,
                image: image,
                description: description,
                genre: genre,
                year: year,
                multiplayer: multiplayer,
                online: online,
                developer_id: developer_id
            }
        )

        return res.json(
            {
                success: true,
                message: "Videogame added",
                data: newVideogame
            }
        );
    } catch (error) {

        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
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

        const updateVideogame = await Videogame.update({ 
            title: title,
            image: image,
            description: description,
            genre: genre,
            year: year,
            multiplayer: multiplayer,
            online: online,
            developer_id: developer_id }, { where: { id: videogame_id } })

        return res.json(
            {
                success: true,
                message: "Videogame updated",
                data: updateVideogame
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
    }
}

module.exports = userController;