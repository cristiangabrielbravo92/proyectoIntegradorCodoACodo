const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createItem);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.editItem);
router.delete('/delete/:id', adminControllers.deleteItem);


module.exports = router;