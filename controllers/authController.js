const authController = {};
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authController.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing one or more required fields: username, email, password"
            });
        }
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create(
            {
                username: username,
                email: email,
                password: encryptedPassword,
                role_id: 2
            }
        )
        return res.json(
            {
                success: true,
                message: "User created succesfully",
                data: { newUser }
            });
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );
    }
}

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } });
        if (!user) {

            return res.send("Wrong Credentials");
        }



        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {

            return res.send("Wrong Credentials");
        }

        //Token propio para autenticar el usuario
        const token = jwt.sign(
            {
                user_id: user.id,
                username: user.username,
                email: user.email,
                role_id: user.role_id
            },
            'secreto'
        );
        return res.json(
            {
                success: true,
                message: "Token created",
                data: token
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

module.exports = authController;