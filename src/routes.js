const express = require('express');
const router = express.Router();

<<<<<<< HEAD
=======
const Auth = require('./middlewares/Auth');

const AuthValidator = require('./validators/AuthValidator');

>>>>>>> 5a43d62c03f66c5669aa458cfb57e40169cf2870
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

router.get('/ping', (req, res) => {
    res.json({ pong: true});
});

router.get('/states', UserController.getStates);

router.post('/user/signin', AuthController.signin);
<<<<<<< HEAD
router.post('/user/signup', AuthController.signup);

router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/iten', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction);
=======
router.post('/user/signup', AuthValidator.signup, AuthController.signup);

router.get('/user/me', Auth.private, UserController.info);
router.put('/user/me', Auth.private, UserController.editAction);

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', Auth.private, AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/iten', AdsController.getItem);
router.post('/ad/:id', Auth.private, AdsController.editAction);
>>>>>>> 5a43d62c03f66c5669aa458cfb57e40169cf2870



module.exports = router;
