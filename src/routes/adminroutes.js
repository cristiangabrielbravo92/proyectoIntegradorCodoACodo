const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
//const { isLogged } = require('../middlewares/login');
const adminControllers = require('../controllers/adminController');

//router.use(isLogged);

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', uploadFiles.array('images', 2), adminControllers.createItem);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.editItem);
router.delete('/delete/:id', adminControllers.deleteItem);


module.exports = router;