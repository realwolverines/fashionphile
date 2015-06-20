

var app = angular.module('fashionphile');

app.controller('adminCtrl', function($scope, adminService, stats, locations){

    $scope.stats = stats;
    $scope.averageWait = stats.averageTime; 

    $scope.locations = locations;

  });


