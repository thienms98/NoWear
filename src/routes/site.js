const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

// only return sites

router.get('/', siteController.home);
router.get('/products', siteController.products);

router.get('/categories', siteController.categories);
router.get('/categories/create', siteController.createCategories);
router.get('/categories/edit', siteController.editCategories);
router.get('/categories/delete', siteController.deleteCategories);

module.exports = router;
