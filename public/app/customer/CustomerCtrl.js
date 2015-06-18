var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $stateParams, $state, customerLocation, CustomerService){
  console.log("params id is ", $state.params.id);

  $scope.customerLocation = customerLocation;

  $scope.addCustomer = function(customer, location){
    var location = $state.params.id;
    CustomerService.addCustomer(customer, location);
    $scope.customer = {}; 
    //TODO: Fire a success modal or popup
  }
}) 


