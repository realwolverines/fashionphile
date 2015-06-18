var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $stateParams, $state, customerLocation, CustomerService){

  $scope.customerLocation = customerLocation;
  console.log($scope.customerLocation);

  $scope.addCustomer = function(customer, location){
    console.log(location);
    // var location = $state.params.id;
    CustomerService.addCustomer(customer, location);
    $scope.customer = {}; 
  }
  // $scope.location = $state.params.id
}) 


