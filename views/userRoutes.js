const userController = require('../controllers/userController');
const isUser = require('../middleware/isUser');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();


router.get('/getprofile', verifyToken, userController.getProfile);
router.get('/profile/getallusers', verifyToken, isAdmin, userController.getAllUsers);
router.get('/getallvideogames', verifyToken, userController.getAllVideogame);
router.get('/getbygenre', verifyToken, userController.getAllVideogameByGenre);
router.get('/getbytitle', verifyToken, userController.getAllVideogameByTitle);
router.get('/getbyyear', verifyToken, userController.getAllVideogameByYear);
router.get('/getbymultiplayer', verifyToken, userController.getAllVideogameByMultiplayer);
router.get('/getbyonline', verifyToken, userController.getAllVideogameByOnline);
router.get('/getbydeveloper', verifyToken, userController.getAllVideogameByDeveloper);
router.post('/addvideogame', verifyToken, isAdmin, userController.addVideogame);
router.post('/addtofavorite', verifyToken, isUser, userController.addFavorite);
router.put('/updatevideogame/', verifyToken, isAdmin, userController.updateVideogame);




module.exports = router;