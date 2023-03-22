const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  password: { type: String, required: true },
  address: String,
  phoneNum: { type: String, min: 10, max: 10 },
});

module.exports = mongoose.model('User', User);
