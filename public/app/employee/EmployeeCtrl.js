(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('EmployeeCtrl', function($scope, $state, $stateParams, CustomerService){
  // $scope.customers = CustomerService.getCustomers(); 
  // console.log($stateParams); 
  // console.log($state.params); 

  var location = $state.params.id;

  // $scope.refresh = function(){
  //   $scope.customers = CustomerService.getCustomers(); 
  // }

});

})();
