var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $stateParams, $state, CustomerService){

  $scope.addCustomer = function(customer){
    console.log("params id is ", $state.params.id);
    var location = $state.params.id;
    CustomerService.addCustomer(customer, location);
  }

})


