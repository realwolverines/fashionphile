

var app = angular.module('fashionphile');

app.controller('adminCtrl', function($scope, SelectionService, $location, locations, $state, $stateParams){
   

   $scope.goToPage = function(locationId, viewId){
    locationId = locationId[0].toString();
  	var view = viewId[0].toString().replace(/[' ]/g, '').toLowerCase();
    console.log('locationId is ', locationId);

    SelectionService.getLocation(locationId).then(function(response){
      console.log(response)
  		var locationParam = response.nameparam
      console.log(locationParam)
	  console.log("view is " + view, "and location is " + locationParam); 
				$location.path("/" + view + "/" + locationParam);
  	});
}

    // $scope.stats = stats;å
    // $scope.averageWait = stats.averageTime; 

    $scope.locations = locations;


    $scope.stats = stats;

    console.log(stats);

    //Format average mins 
    var x = stats.average;
    var d = moment.duration(x, 'milliseconds');
    var mins = Math.floor(d.asMinutes()) * 60;
    console.log("mins: ", mins);

    $scope.averageWait = mins;

    $scope.shortestWait = stats.shortestWait;
    
    // $scope.longestWait = stats.longestWait;
    // $scope.totalCustomers = stats.totalCustomers;


