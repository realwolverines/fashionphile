//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  locationSchema = new Schema({
  name: String,
  customers: [{type: Schema.Types.ObjectId, ref: 'Customers'}]
});

module.exports = mongoose.model('Location', locationSchema); 