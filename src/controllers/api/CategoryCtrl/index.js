const Category = require('../../../models/Category');
let ejs = require('ejs');

class CategoryController {
  // [GET] /api/categories
  index(req, res, next) {
    Category.find({ name: 'dress' }).then(() => console.log('saved new category'));
  }

  // [POST] /api/categories?name=...
  create(req, res, next) {
    const category = req.body;
    Category.create(category)
      .then(() => {
        res.redirect('/categories/create');
      })
      .catch((e) => console.log(e));
  }

  // [PUT] /api/categories?_id=...
  delete(req, res, next) {
    const _id = req.params._id;
    console.log(_id);
  }
}

module.exports = new CategoryController();
