(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $q, $http, CustomerService){

// $scope.getCustomers = function(){
//   CustomerService.getCustomers(); 
// }; 

$scope.addCustomer = function(customer){
  console.log(customer); 
}

})();
