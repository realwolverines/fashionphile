(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('EmployeeCtrl', function($scope, $state, $location, CustomerService, customers, toaster){

  var location = $state.params.id;
  $scope.customers = customers; 
  $scope.currentTime = Date.now();

  $scope.helpCustomer = function(customer){
    CustomerService.helpCustomer(customer)
      .then(function(customer){
         toaster.pop('success', 'Customer being helped')
        var location = customer.location
        CustomerService.getCustomers(location)
        .then(function(customers){
          $scope.customers = customers;
        }); 
          
      }); 
  }

});

app.filter('timeAgo', ['$interval', function ($interval){

    // trigger digest every 60 seconds
    $interval(function (){}, 60000);

    function fromNowFilter(time){
      return moment(time).fromNow();
    }

    fromNowFilter.$stateful = true;
    return fromNowFilter;
}]); 

})(); 
