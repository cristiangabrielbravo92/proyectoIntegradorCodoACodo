const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainController')

router.get('/home/:id', mainControllers.home);
router.get('/contact', mainControllers.contact);
router.get('/about', mainControllers.about);
router.get('/faqs', mainControllers.faqs);

module.exports = router;