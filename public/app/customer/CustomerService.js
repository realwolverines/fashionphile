
  var app = angular.module('fashionphile');

  app.service('CustomerService', function($q, $http){

  this.addCustomer = function(customer, location){
    var dfd = $q.defer(); 
        $http({
          method: 'POST',
          url: 'http://localhost:8080/api/'+location+'/queue', /* location is lowercase, a-z, no special chars or numbers. */
          data: {
            "name": customer.name, 
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
          url: 'http://localhost:8080/api/'+location+'/queue'
        })
        .then(function(customers){
          dfd.resolve(customers);
        })
      return dfd.promise; 
    }

}) /* End of Service logic */
  
