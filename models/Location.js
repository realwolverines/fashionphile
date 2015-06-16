//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  locationSchema = new Schema({
  name: String,
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  date: { type: Date, default: Date.now },
	active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Location', locationSchema); 