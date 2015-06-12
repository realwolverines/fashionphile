(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('CustomerCtrl', function($scope, $q, $http, CustomerService, $routeParams){

// $scope.getCustomers = function(){
//   CustomerService.getCustomers(); 
// }; 

  $scope.addCustomer = function($routeParams){
    console.log($routeParams);     
  }

}) //End Controller 

})(); //End IFFE
