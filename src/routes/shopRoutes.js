const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.get('/items/', mainController.getShopByItems); // para usar el filtro usamos queryparams

router.post('/item/:id/add', shopControllers.addItem);

router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.checkout);
router.get('/checkout',shopControllers.checkout);


module.exports = router;