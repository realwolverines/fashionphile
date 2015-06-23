

var app = angular.module('fashionphile');

app.controller('dashboardCtrl', function($scope, $location, $state, stats, customerLocation){
   
    $scope.stats = stats;
    $scope.average = stats.average;
    $scope.longestWait = stats.longestWait;
    $scope.shortestWait = stats.shortestWait;
    $scope.totalCustomers = stats.totalCustomers;
    $scope.averageDailyCust = stats.averageDailyCust;
    

    //admin weekly data
    $scope.data = 
    [{
        "day": "Mon",
        "count": 0
     },
     {
        "day": "Tue",
        "count": 1
     },
     {
        "day": "Wed",
        "count": 0
     },
     {
        "day": "Thu",
        "count": 3
     },        
     {
        "day": "Fri",
        "count": 6
     },
     {
        "day": "Sat",
        "count": 5
     }];    

  	$scope.customerLocation = customerLocation;
    //GO TO TV VIEW OF LOCATION 
    $scope.goToTvView = function(){
    	var location = $state.params.id;
      $location.path('/walldisplay/' + location);
    }


  }); 


