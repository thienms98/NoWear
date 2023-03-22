const express = require('express');
const router = express.Router();
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const apiRoute = require('./api');
const siteRoute = require('./site');

router.use((req, res, next) => {
  next();
});

router.use('/api', apiRoute);
router.use('/', siteRoute);

module.exports = router;
