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

  getTotalHelped: function(req, res){
    var dfd = q.defer(); 
      Customer
        .find()
        .where("status").equals("done")
        .exec(function(err, cust) {
          dfd.resolve(cust);
        })
      return dfd.promise;
  },

  getLast7Days: function(req, res){
    var dfd = q.defer(); 
      Customer
        .find()
        .where("helpedAt").gt(0)
        .exec()
        .then(function(customers){
          console.log(customers); 
          dfd.resolve(customers); 
        })
      return dfd.promise; 
  },

  getDailyCustomers: function(req, res){
    var dfd = q.defer(); 
        Customer 
            .find({
                helpedAt: {
                    $gt: ObjectId.createFromTimestamp(Date.now()*1000-12*60*60)
                }
            })
            .then(function(customers){
              console.log("getDailyCustomers ", customers); 
              dfd.resolve(customers); 
            })
  },





}