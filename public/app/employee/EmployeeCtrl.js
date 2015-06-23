(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('EmployeeCtrl', function($scope, $interval, $state, $location, CustomerService, customers, customerLocation, toaster){

  $scope.customerLocation = customerLocation;

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
          // $rootScope.$emit('customersHelped', customers);
          $scope.customers = customers;
        });      
      }); 
  }

  //$interval hack

   $interval(function(){
      var locationParam = $state.params.location;
      console.log('intervalEmployeeCtrl', locationParam)
      CustomerService.getCustomers(locationParam)
        .then(function(customers){
          $scope.customers = customers;
        }); 
   }, 5000);


});

app.filter('timeAgo', ['$interval', function ($interval){
    // trigger digest every 60 seconds
    $interval(function (){}, 30000);
    function fromNowFilter(time){
      return moment(time).fromNow();
    }
    fromNowFilter.$stateful = true;
    return fromNowFilter;
}]); 

})(); 
