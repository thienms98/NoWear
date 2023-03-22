const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
  amount: Number,
  color: String,
  size: String,
  productId: Schema.Types.ObjectId,
  orderMainId: Schema.Types.ObjectId,
});

module.exports = mongoose.model('Order', Order);
