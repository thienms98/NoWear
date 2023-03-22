const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: String,
  price: Number,
  saleoff: { type: Number, min: 0, max: 100 },
  colors: Array,
  description: { type: String, max: 300 },
  date: { type: Date, default: Date.now },
  size: Array,
  categoryIds: Array,
});

module.exports = mongoose.model('Product', Product);
