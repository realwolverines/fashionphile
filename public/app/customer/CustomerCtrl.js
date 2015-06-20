var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $stateParams, $state, CustomerService, customerLocation, toaster){

  $scope.customerLocation = customerLocation;
  console.log(customerLocation); 

  $scope.addCustomer = function(customer, location){
    var location = $state.params.id;
    CustomerService.addCustomer(customer, location);
    toaster.pop('Success!', 'You are now in the queue. We\'ll be with you shortly.')
    $scope.customer = {};
  }

  $scope.currentTime = Date.now();

}) 


