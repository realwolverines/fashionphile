var Customer = require('../models/Customer.js'); 

module.exports = {

  add: function(name){
    var newCustomer = new Customer(req.body); 
    console.log("req.body in customer", newCustomer); 
    newCustomer.save(function(err, newCustomer){
      console.log("newCustomer saved ", newCusutomer); 
      if(err){
        console.log(err); 
        return res.status(500).end(); 
      }
      res.json(newCustomer); 
    })
  },

  list: function(req, res){
    Customer.
      .find({}, function(err, customers){
        if(err) {
          res.status(500).end(); 
        }
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
      .
  }
}