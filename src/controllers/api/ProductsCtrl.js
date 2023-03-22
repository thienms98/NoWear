const Category = require('../../models/Category');

class ProductController {
  // [GET] /api/products
  index(req, res, next) {
    if (!req.query) {
      res.send('get all products');
    } else {
      res.send('get by id');
    }
  }
}

module.exports = new ProductController();
