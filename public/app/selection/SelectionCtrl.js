(function(){
	'use strict'; 

var app = angular.module('fashionphile');

app.controller('SelectionCtrl', function($scope, locations, $window, SelectionService, $location, $state, $stateParams){
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

	$scope.addNew = function(location){
		SelectionService.addLocation(location)
		.then(function(){
			SelectionService.getLocations()
			.then(function(locations){
				$scope.locations = locations;
				$scope.location = {};
			});
		});
	};

	$scope.deleteStore = function(location){
		SelectionService.deleteLocation(location)
		.then(function(){
			SelectionService.getLocations()
			.then(function(locations){
				$scope.locations = locations;	
			});
		});
	};

$scope.startLocationEditing = function(location){
     location.editing = true;
 };
     
 $scope.doneLocationEditing = function(location){
     console.log('locIDCtrller', location)
     SelectionService.saveLocation(location).then(function(){
           SelectionService.getLocations()
           .then(function(locations){
             $scope.locations = locations;
           })
         })
     location.editing = false;
     $scope.editedlocation = null;
 };

  $scope.locations = locations;
	console.log($window.location);
	var currentStore = $window.location.hash.substr(2, $window.location.hash.length)

})

})();
