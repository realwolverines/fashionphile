(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('adminCtrl', function($scope, adminService, stats){

    $scope.stats = stats;
    $scope.averageWait = stats.averageTime; 

  });

})();
