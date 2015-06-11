var Customer = require('../models/Customer.js'); 

module.exports = {

  add: function(req, res){
    var newCustomer = new Customer(req.body); 
    console.log("add method hit in queueCtrl.js", newCustomer); 
    newCustomer.save(function(err, newCustomer){
      console.log("newCustomer saved ", newCustomer); 
      if(err){
        console.log(err); 
        return res.status(500).end(); 
      }
      res.json(newCustomer);
    })
  },

  getByLocation: function(req, res){
    Customer
      .find({location: user.location}, function(err, customers){
        if(err) res.status(500).end(); 
        res.json(customers); 
      })
  },

  delete: function(req, res) {
    Customer
      .findById(req.params.customerId)
      .remove()
      .exec(function(err, res){
        console.log(res); 
        if(err) return res.status(500).end(); 
        return res.status(200).json(result); 
      });
  },

  update: function(req, res){
    Customer 
      .findByIdAndUpdate(req.params.customerId, {status: req.body.status})
      .exec(function(err, result) {
        console.log(result); 
        if(err) return res.status(500).end(); 
        return res.status(200).json(result); 
      })
  }
}