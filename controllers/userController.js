const { User } = require("../models");

const userController = {};

userController.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll({
            attributes: { exclude: ["password", "role_id"] }
        });
        return res.json({
            success: true,
            message: "Here are all the clients",
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

module.exports = userController;