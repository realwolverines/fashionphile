var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $stateParams, $state, CustomerService, customerLocation, toaster){

  console.log("params id is ", $state.params.id);

  $scope.customerLocation = customerLocation;

  $scope.addCustomer = function(customer, location){
    var location = $state.params.id;
    CustomerService.addCustomer(customer, location);
    $scope.customer = {}; 
  }
}) 
    console.log(customer)
    $scope.pop = function(){
      toaster.pop('success', "You are now in the queue!", "");
  };

})



