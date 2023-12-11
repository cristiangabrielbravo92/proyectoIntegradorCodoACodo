const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/login');
const adminControllers = require('../controllers/adminController');

router.use(isLogged);

router.get('/', isLogged, adminControllers.admin);
router.get('/create', isLogged, adminControllers.create);
router.post('/create', isLogged, uploadFiles.array('images', 2), adminControllers.createItem);
router.get('/edit/:id', isLogged, adminControllers.edit);
router.put('/edit/:id', isLogged, adminControllers.editItem);
router.delete('/delete/:id', isLogged, adminControllers.deleteItem);


module.exports = router;