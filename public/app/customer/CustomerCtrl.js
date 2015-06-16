
var app = angular.module('fashionphile');


app.controller('CustomerCtrl', function($scope, $stateParams){
// $scope.getCustomers = function(){
//   CustomerService.getCustomers(); 
// }; 

  $scope.addCustomer = function($routeParams){
    console.log($routeParams);
  }

}) //End Controller 


