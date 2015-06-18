var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $stateParams, $state, CustomerService, toaster){
  console.log("params id is ", $state.params.id);

  $scope.addCustomer = function(customer, location){
    var location = $state.params.id;
    CustomerService.addCustomer(customer, location);
    $scope.customer = {}; 
  }

    $scope.pop = function(){
      toaster.pop('success', "title", "name");
  };

})


