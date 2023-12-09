const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.shop);

router.get('/item/:id', mainController.getShopItemById);

router.get('/items/', mainController.getShopItemByItem); // para usar el filtro usamos queryparams

//router.post('/item/:id', mainController.postShopItemById);

router.get('/cart',mainController.getCart);

//router.post('/cart', mainController.postCart); // se usa cuando voy a pagar

module.exports = router;