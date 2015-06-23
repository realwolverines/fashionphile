

var app = angular.module('fashionphile');

app.controller('dashboardCtrl', function($scope, stats){
   
    $scope.stats = stats;
    $scope.average = stats.average;
    $scope.longestWait = stats.longestWait;
    $scope.shortestWait = stats.shortestWait;
    $scope.totalCustomers = stats.totalCustomers;
    $scope.averageDailyCust = stats.averageDailyCust;

  }); 


