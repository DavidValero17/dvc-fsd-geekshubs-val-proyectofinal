const userController = require('../controllers/userController');
// const isUser = require('../middleware/isUser');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();


router.get('/profile/getallusers', verifyToken, isAdmin, userController.getAllUsers);
router.post('/addvideogame', verifyToken, isAdmin, userController.addVideogame);
router.put('/updatevideogame/:id', verifyToken, isAdmin, userController.updateVideogame);



module.exports = router;