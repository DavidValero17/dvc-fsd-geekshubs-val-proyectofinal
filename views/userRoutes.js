const userController = require('../controllers/userController');
const isUser = require('../middleware/isUser');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();


router.get('/getprofile', verifyToken, userController.getProfile);
router.get('/profile/getallusers', verifyToken, isAdmin, userController.getAllUsers);
router.get('/getallvideogames', verifyToken, userController.getAllVideogame);
router.post('/addvideogame', verifyToken, isAdmin, userController.addVideogame);
router.post('/addtofavorite', verifyToken, isUser, userController.addFavorite);
router.put('/updatevideogame/', verifyToken, isAdmin, userController.updateVideogame);




module.exports = router;