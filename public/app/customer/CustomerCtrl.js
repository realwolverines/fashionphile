(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $q, $http, CustomerService){

// $scope.getCustomers = function(){
//   CustomerService.getCustomers(); 
// }; 

$scope.addCustomer = function($scope.name, $routeParams){
  CustomerService.addCustomer($scope.name, $routeParams); 
  console.log(customer); 
  CustomerService.getCustomers(); 
}

})();
