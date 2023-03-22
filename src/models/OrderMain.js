const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderMain = new Schema({
  userId: Schema.Types.ObjectId,
  status: String,
  date: { type: Date, default: Date.now },
  transportMethod: String,
});

module.exports = mongoose.model('OrderMain', OrderMain);
