

var app = angular.module('fashionphile');

app.controller('LoginCtrl', function($scope, $location, LoginService){
$scope.login = function() {
   LoginService.login($scope.email, $scope.password)
   .then(function() {
     console.log("Logged in!"); 
     $location.path('/selection');
   })
   .catch(function(err) {
     $scope.error = err;
     console.log("Error", err); 
   });
 };
});
