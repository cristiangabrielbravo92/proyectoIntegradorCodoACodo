const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/login', mainController.login);

//router.post('/login',mainController.postLogin);

router.get('/register', mainController.getRegister);

//router.post('/register', mainController.postRegister);

//router.get('/logout', mainController.logout);

module.exports = router;