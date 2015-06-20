

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

    // $scope.stats = stats;
    // $scope.averageWait = stats.averageTime; 

    $scope.locations = locations;


  }); 


