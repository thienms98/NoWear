const url = require('url');
const Category = require('../../models/Category');

class SiteController {
  home(req, res) {
    res.render('index');
  }

  products(req, res) {
    res.send('products');
  }

  categories(req, res) {
    Category.find().then((categories) => {
      res.render('category/index', { categories });
    });
  }
  createCategories(req, res) {
    res.render('category/create');
  }
  editCategories(req, res) {
    console.log(req.query._id);
    // res.render('category/create');
  }
  deleteCategories(req, res) {
    res.redirect(
      url.format({
        pathname: '/',
        query: {
          id: req.query._id,
        },
      }),
    );
  }

  users(req, res) {
    res.send('users');
  }
}

module.exports = new SiteController();
