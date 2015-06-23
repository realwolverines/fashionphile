var app = angular.module('fashionphile');

app.controller('adminCtrl', function($scope, $location, locations, adminStats, $state, $stateParams){

    $scope.locations = locations;

    $scope.stats = adminStats;

    $scope.average = adminStats.average; 
    $scope.longestWait = adminStats.longestWait; 
    $scope.shortestWait = adminStats.shortestWait; 
    $scope.totalCustomers = adminStats.totalCustomers; 
    $scope.averageDailyCust = Math.round(adminStats.averageDailyCust);

    //admin weekly data
    $scope.data = [
     {
        "day": "Mon",
        "count": 1
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
        "count": 18
     },        
     {
        "day": "Fri",
        "count": 15
     },
     {
        "day": "Sat",
        "count": 19
     }];

    //go to admin view of specific location
    $scope.goToAdminView = function(location){
      console.log('loc loc', location);
      var locationId = location.toString().replace(/[' ]/g, '').toLowerCase();
      console.log("dashboard view is ", locationId);
      $location.path('/dashboard/' + locationId);
    }


});