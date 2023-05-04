const userController = require('../controllers/userController');
// const isUser = require('../middleware/isUser');
// const verifyToken = require('../middleware/verifyToken');
// const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();


router.get('/profile/getallusers',/*verifyToken, isAdmin, */userController.getAllUsers);

module.exports = router;