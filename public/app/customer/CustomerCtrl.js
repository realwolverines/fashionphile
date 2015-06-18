var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $stateParams, $state, CustomerService){
  console.log("params id is ", $state.params.id);
  $scope.addCustomer = function(customer, location){
    var location = $state.params.id;
    CustomerService.addCustomer(customer, location, function(){
      toastr.success('Success!', 'You\'ve been added to the queue')
    });
    $scope.customer = {}; 
  }

})


