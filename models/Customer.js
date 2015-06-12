//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  customerModel = new Schema({
  name: String,
  // location: String, 
  joined: {type: Date, default: Date.now},
  status: {type: String, enum: ["pending", "done"], default: "pending"},
  helpedAt: {type: Date}
});

module.exports = mongoose.model('Customer', customerModel);