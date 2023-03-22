const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/ProductsCtrl');
const categoryCtroller = require('../../controllers/api/CategoryCtrl');

router.get('/products', productController.index);
router.get('/category', categoryCtroller.index);
router.post('/category', categoryCtroller.create);

module.exports = router;
