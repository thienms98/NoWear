const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rate = new Schema({
  name: String,
  content: String,
  value: { type: Number, min: 1, max: 5 },
  userId: Schema.Types.ObjectId,
  productId: Schema.Types.ObjectId,
});

module.exports = mongoose.model('Rate', Rate);
