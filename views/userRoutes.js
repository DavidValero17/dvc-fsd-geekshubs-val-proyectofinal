const userController = require('../controllers/userController');
const isUser = require('../middleware/isUser');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();


router.get('/getprofile', verifyToken, userController.getProfile);
router.put('/getprofile', verifyToken, isUser, userController.updateUser);
router.get('/profile/getallusers', verifyToken, isAdmin, userController.getAllUsers);
router.get('/getallvideogames', verifyToken, userController.getAllVideogame);
router.get('/getvideogamebyid/:id', verifyToken, userController.getVideogameById);
router.post('/addvideogame', verifyToken, isAdmin, userController.addVideogame);
router.post('/addtofavorite', verifyToken, isUser, userController.addFavorite);
router.put('/updatevideogame/', verifyToken, isAdmin, userController.updateVideogame);
router.delete('/deletefavorite', verifyToken, isUser, userController.deleteFavorite);



module.exports = router;