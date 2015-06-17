
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
      var dfd = $q.defer(); 
        $http({
          method: 'GET', 
          url: '/api/'+location+'/queue'
        })
        .then(function(customers){
          dfd.resolve(customers);
        })
      return dfd.promise; 
    }

}); /* End of Service logic */
  
