const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validator');
const authControllers = require('../controllers/authController');

const loginValidation = {
    body(email)
    .isEmail()
    .withMessage('Ingrese un correo válido'),
    body(password)
    .isLength({min: 6})
    .isAlphanumeric()
    .withMessage('Ingrese una contraseña de al menos 6 caracteres que contenga letras y números.')
};


router.get('/login', authControllers.login);
router.post('/login', loginValidation, validateInput, authControllers.loginUser);
router.get('/register', authControllers.register);
router.post('/register', authControllers.registerUser);
router.get('/logout', authControllers.logout);

module.exports = router;