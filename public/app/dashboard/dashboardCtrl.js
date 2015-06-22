

var app = angular.module('fashionphile');

app.controller('dashboardCtrl', function($scope, stats){
   
    $scope.stats = stats.data;


  }); 


