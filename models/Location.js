//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  locationSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Location', locationSchema); 