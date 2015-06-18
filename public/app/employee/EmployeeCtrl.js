(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('EmployeeCtrl', function($scope, $state, $stateParams, CustomerService, customers){

  var location = $state.params.id;
  $scope.customers = customers; 

});

})(); 
