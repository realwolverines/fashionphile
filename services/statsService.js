var Customer = require('../models/Customer.js'); 
var q = require('q'); 
var moment = require('moment');   

module.exports = {

  getCustomers: function(req, res) {
  var dfd = q.defer();
    Customer
      .find()
      .where("helpedAt").gt(0)
      .exec(function(err, customers) {
          dfd.resolve(customers);
      })
    return dfd.promise;
  },

  getCustomersByLocation: function(req, res){
    console.log('statService', req)
    var location = req;
    var dfd = q.defer(); 
      Customer
        .find({ location: location })
        .where("helpedAt").gt(0)
        .exec(function(err, customers){
          dfd.resolve(customers); 
        })
      return dfd.promise; 
  }

}