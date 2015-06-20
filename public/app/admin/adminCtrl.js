(function(){
	'use strict';

var app = angular.module('fashionphile');

app.controller('adminCtrl', function($scope, adminService, stats){

    $scope.stats = stats;
    
    // var x = stats.average; 
    // var time = moment.duration(x);
    // $scope.averageWait = tempTime.minutes();

    console.log(stats);

    var x = stats.average; 
    var d = moment.duration(x, 'milliseconds'); 
    var mins = Math.floor(d.asMinutes()) * 60;  
    console.log("mins: ", mins); 

    $scope.averageWait = mins; 

    // $scope.shortestWait = stats.shortestWait; 
    // $scope.longestWait = stats.longestWait; 
    // $scope.totalCustomers = stats.totalCustomers; 


  });

})();
