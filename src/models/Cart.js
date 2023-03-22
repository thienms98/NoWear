const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
  amount: Number,
  color: String,
  size: String,
  productId: Schema.Types.ObjectId,
  userId: Schema.Types.ObjectId,
});

module.exports = mongoose.model('Cart', Cart);
