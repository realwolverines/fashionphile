

var app = angular.module('fashionphile');

app.controller('dashboardCtrl', function($scope, $location, $state, stats){
   
    $scope.stats = stats;
    $scope.average = stats.average;
    $scope.longestWait = stats.longestWait;
    $scope.shortestWait = stats.shortestWait;
    $scope.totalCustomers = stats.totalCustomers;
    $scope.averageDailyCust = stats.averageDailyCust;
    

    //admin weekly data
    $scope.data = [
     {
        "day": "Mon",
        "count": 6
     },
     {
        "day": "Tue",
        "count": 3
     },
     {
        "day": "Wed",
        "count": 5
     },
     {
        "day": "Thu",
        "count": 7
     },        
     {
        "day": "Fri",
        "count": 9
     },
     {
        "day": "Sat",
        "count": 0
     }];


    //GO TO TV VIEW OF LOCATION 
    $scope.goToTvView = function(){
    	var location = $state.params.id;
      $location.path('/walldisplay/' + location);
    }


  }); 


