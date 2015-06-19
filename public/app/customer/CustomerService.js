
  var app = angular.module('fashionphile');

  app.service('CustomerService', function($q, $http, $stateParams, $state){

  this.addCustomer = function(customer, location){
    var dfd = $q.defer();
        $http({
          method: 'POST',
          url: '/api/customer/',
          data: {
            "name": customer.name,
            "email": customer.email,
            "status": "pending",
            "joined": Date.now,
            "location": location
          }
        })
        .then(function(res){
          console.log(res);
          dfd.resolve(res); 
        });
      return dfd.promise;
    },

    this.getCustomers = function(location){
      console.log("getCustomers location ", location); 
      var dfd = $q.defer();
        $http({
          method: 'GET',
          url: '/api/employee/'+location
        })
        .then(function(customers){
          dfd.resolve(customers.data);
        })
      return dfd.promise; 
    },

    this.helpCustomer = function(customer){
      console.log(customer, customer._id); 
      var customerId = customer._id
      var dfd = $q.defer(); 
        $http({
          method: 'PUT', 
          url: '/api/customer/'+customerId, 
          data: {
            "status": "done", 
            "helpedAt": Date.now(),
          }
        }).then(function(customer){
          console.log("customer service logs", customer); 
          dfd.resolve(customer.data); 
        })
      return dfd.promise; 
    }

}); /* End of Service logic */
