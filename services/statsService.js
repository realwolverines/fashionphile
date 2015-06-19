var Customer = require('../models/Customer.js'); 
var q = require('q'); 

module.exports.getStats = function(req, res) {
  var dfd = q.defer();
    Customer
      .find()
      .where("helpedAt").gt(0)
      .exec(function(err, customers) {
          dfd.resolve(customers);
      })
  return dfd.promise;
}