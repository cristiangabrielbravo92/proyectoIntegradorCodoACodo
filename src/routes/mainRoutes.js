const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainController')

router.get('/', mainControllers.home);
//router.get('/home/:id', mainControllers.home);
// router.get('/', (req, res, next) => {
//     req.session.logs = req.session.logs ? ++req.session.logs : 1;
//     //console.log(req.session.logs);
//     next();
// }, mainControllers.home);

router.get('/contact', mainControllers.contact);
router.post('/mensajeEnviado', mainControllers.enviarMensaje);
router.get('/mensajeEnviado',mainControllers.mensajeEnviado);
router.get('/about', mainControllers.about);
router.get('/faqs', mainControllers.faqs);
router.get('/page_error', mainControllers.page_error);

module.exports = router;