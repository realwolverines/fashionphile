(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('StatsCtrl', function($scope, StatsService, stats){

$scope.stats = stats;

$scope.averageWait = stats.averageTime; 

});

})();
