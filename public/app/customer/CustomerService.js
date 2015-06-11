(function(){
  'use strict';

var app = angular.module('fashionphile');
app.service('CustomerService', function($q, $http){
  this.getCustomers = function(){
    var dfd = $q.defer(); 
      $http({
        method: 'GET', 
        url: 'http://localhost:8080/api/queue'
      })
      .then(function(res){
        dfd.resolve(res); 
      })
    return dfd.promise; 
  },

  this.addCustomer = function(customer){
    var dfd = $q.defer(); 
        $http({
          method: 'POST'
          url: 'http://localhost:8080/api/queue',
          data: customer
        })
        .then(function(res){
          dfd.resolve(res);
        }); 
      return dfd.promise;
    }

  })
  
});