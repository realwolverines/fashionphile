var app = angular.module('fashionphile');

app.controller('adminCtrl', function($scope, $location, locations, adminStats, $state, $stateParams){

    $scope.locations = locations;

    $scope.stats = adminStats;

    $scope.average = adminStats.average; 
    $scope.longestWait = adminStats.longestWait; 
    $scope.shortestWait = adminStats.shortestWait; 
    $scope.totalCustomers = adminStats.totalCustomers; 
    $scope.averageDailyCust = adminStats.averageDailyCust;

    //GO TO ADMIN VIEW OF LOCATION 
    $scope.goToAdminView = function(location){
      console.log('loc loc', location);
      var locationId = location.toString().replace(/[' ]/g, '').toLowerCase();
      console.log("dashboard view is ", locationId);
      $location.path('/dashboard/' + locationId);
    }

});